package com.example.my_deezer_app.adapter

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.my_deezer_app.R
import com.example.my_deezer_app.model.Artist

class RecyclerViewAdapterArtist(private val listArtists: List<Artist>) : RecyclerView.Adapter<RecyclerViewAdapterArtist.ViewHolder>() {

    // create new views
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        // inflates the card_view_design view
        // that is used to hold list item
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_artist, parent, false)

        return ViewHolder(view)
    }

    // binds the list items to a view
    override fun onBindViewHolder(holder: ViewHolder, position: Int) {

        val ItemsViewModel = listArtists[position]

        // sets the image to the imageview from our itemHolder class
        holder.imageView.setImageResource(ItemsViewModel.id)

        // sets the text to the textview from our itemHolder class
        holder.textView.text = ItemsViewModel.name

        // sets the text to the textview from our itemHolder class
        //holder.textView.text = ItemsViewModel.nb_fan.toString()

    }

    // return the number of the items in the list
    override fun getItemCount(): Int {
        return listArtists.size
    }

    // Holds the views for adding it to image and text
    class ViewHolder(ItemView: View) : RecyclerView.ViewHolder(ItemView) {
        val imageView: ImageView = itemView.findViewById(R.id.image_view_artist)
        val textView: TextView = itemView.findViewById(R.id.text_artist_name)
    }
}


