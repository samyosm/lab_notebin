package com.samyosm.notebinapi.controllers;

import com.samyosm.notebinapi.models.NoteItem;
import com.samyosm.notebinapi.repositories.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/note")
public class Notes {

    private final NoteRepository noteRepository;

    @Autowired
    public Notes(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @PostMapping("/add")
    public String addNote(@RequestBody NoteItem note) {
        var storedNote = noteRepository.save(note);
        return storedNote.getId();
    }

    @GetMapping("/all")
    public List<NoteItem> addNote() {
        return noteRepository.findAll();
    }

    @GetMapping("/get/{id}")
    public NoteItem getNote(@PathVariable String id) {
        return noteRepository.findById(id).orElseThrow(() -> {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Note with id " + id + " does not exist");
        });
    }
}
