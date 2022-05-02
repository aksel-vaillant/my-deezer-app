package com.example.my_deezer_app.service

import okhttp3.*
import java.net.URLEncoder


class DeezerService
{
    fun searchArtist(name : String, callback: CallBackSearchArtist){
        // should be a singleton

        val client = OkHttpClient()
        val url = "https://api.deezer.com/search/artist?q=" + URLEncoder.encode(name, "UTF-8");

        val request: Request = Request.Builder()
            .url(url)
            .build()

        // Get a handler that can be used to post to the main thread
        client.newCall(request).enqueue(callback)
    }
}