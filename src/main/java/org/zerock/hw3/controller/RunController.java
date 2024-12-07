package org.zerock.hw3.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.zerock.hw3.RequestCode;

@RestController
@RequestMapping("/execute")
public class RunController {

    @PostMapping
    public ResponseEntity<String> executeCode(@RequestBody RequestCode request) throws InterruptedException {
        Thread.sleep(request.getDelay());

        return ResponseEntity.ok(request.getCode());
    }
}