package com.accenture.springdata.controller;
import com.accenture.springdata.model.Animal;
import com.accenture.springdata.model.Zoo;
import com.accenture.springdata.service.SpringDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
public class SpringDataController {

    @Autowired SpringDataService springDataService;

    @GetMapping("/zoo")
    @ResponseBody
    public List<Zoo> getAllZoo(){
        return springDataService.getAll();
    }

    @PostMapping("/zoo")
    @ResponseBody
    public Zoo newZoo(@RequestBody Zoo zoo){
        return springDataService.addZoo(zoo);

    }

    @PostMapping("/zoo/zoos")
    @ResponseBody
    public List<Zoo> newZoos(@RequestBody List<Zoo> zoos){
        for (Zoo zoo:zoos) {
            newZoo(zoo);
        }
        return getAllZoo();
    }

    @GetMapping("/zoo/{zooId}")
    @ResponseBody
    public Zoo getZoo(@PathVariable("zooId")Long zooId){
        return springDataService.findZooById(zooId);
    }

    @PostMapping("/zoo/animal")
    @ResponseBody
    public boolean addAnimal(@RequestBody Animal animal){
        springDataService.addAnimal(animal);
        return true;
    }

   /* @GetMapping("zoo/{zooNombre}/animals")
    @ResponseBody
    public List<Animal> getAnimals(@PathVariable String zooNombre){
            return springDataService.getAllAnimals(zooNombre);
    }*/

    @GetMapping("/zoo/{zooId}/animals")
    @ResponseBody
    public Map<String,Object> getAllAnimals(@PathVariable Long zooId){
        return springDataService.makeZooDto(zooId);
    }


}
