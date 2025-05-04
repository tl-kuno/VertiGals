'use client'

import { useState, useEffect } from 'react'
import { MasonryPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/masonry.css'

import smallImages from '../metaData/photoGallery'

export default function Community() {
    const shuffleArray = (array: any[]) => {
        return array
            .map((item) => ({ item, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ item }) => item)
    }

    const [shuffledArray, setShuffledArray] = useState<any[]>([])

    useEffect(() => {
        setShuffledArray(shuffleArray(smallImages))
    }, [])

    return (
        <div className="grid-container full">
            <MasonryPhotoAlbum photos={shuffledArray} />
        </div>
    )
}
