package com.example.my_deezer_app

import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.my_deezer_app.adapter.RecyclerViewAdapterArtist
import com.example.my_deezer_app.databinding.FragmentArtistBinding
import com.example.my_deezer_app.service.CallBackSearchArtist
import com.example.my_deezer_app.service.DeezerService
import com.example.my_deezer_app.model.SearchArtist

/**
 * A simple [Fragment] subclass as the default destination in the navigation.
 */
class ArtistsFragment : Fragment() {

    // Static values
    companion object {
        private const val TAG = "ArtitsActivity"
    }

    private var _binding: FragmentArtistBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    override fun onCreateView(
            inflater: LayoutInflater, container: ViewGroup?,
            savedInstanceState: Bundle?
    ): View? {

        _binding = FragmentArtistBinding.inflate(inflater, container, false)

        val artist = arguments?.get("artist")
        Log.d(TAG, "artist $artist")

        if(artist == null) return binding.root

        val deezerService : DeezerService = DeezerService()
        deezerService.searchArtist(artist as String, object : CallBackSearchArtist() {
            override fun fireResponseOk(searchArtist: SearchArtist) {
                Log.d(TAG, "searchArtist $searchArtist")

                // getting the recyclerview by its id
                val recyclerview = view!!.findViewById<RecyclerView>(R.id.ArtistsFragment)

                // this creates a vertical layout Manager
                // recyclerview.layoutManager = LinearlayoutManager()

                // ArrayList of class ItemsViewModel
                val data = searchArtist.data

                // This will pass the ArrayList to our Adapter
                val adapter = RecyclerViewAdapterArtist(data)

                // Setting the Adapter with the recyclerview
                recyclerview.adapter = adapter
            }
        })

        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }

}