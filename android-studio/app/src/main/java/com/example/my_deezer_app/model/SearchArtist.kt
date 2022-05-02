package com.example.my_deezer_app.model

import com.example.my_deezer_app.model.Artist

data class SearchArtist(
    val `data`: List<Artist>,
    val next: String,
    val total: Int
)