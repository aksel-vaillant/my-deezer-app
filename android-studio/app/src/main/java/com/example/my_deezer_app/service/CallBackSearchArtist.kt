package com.example.my_deezer_app.service

import android.os.Handler
import android.os.Looper
import android.util.Log
import com.example.my_deezer_app.model.SearchArtist
import com.google.gson.Gson
import okhttp3.Call
import okhttp3.Callback
import okhttp3.Response
import java.io.IOException

abstract class CallBackSearchArtist : Callback {

    // Static values
    companion object {
        private const val TAG = "CallBackSearchArtist"
    }


    abstract fun fireResponseOk(searchArtist: SearchArtist)

    override fun onFailure(call: Call, e: IOException) {
        Log.d(TAG, "onFailure ")
    }

    override fun onResponse(call: Call, response: Response) {
        Log.d(TAG, "onResponse ")

        if(!response.isSuccessful){
            return;
        }

        val responseBody = response.body!!.string()
        val gson = Gson()
        val searchArtist: SearchArtist = gson.fromJson(responseBody, SearchArtist::class.java)

        Log.d(TAG, "gotSearchArtist and lenght " + searchArtist.total)

        runOnUiThread(Runnable{
            fireResponseOk(searchArtist)
        })
    }

    private fun runOnUiThread(task : Runnable){
        Handler(Looper.getMainLooper()).post(task)
    }
}