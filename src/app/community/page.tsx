'use client'

import { useState, useEffect } from 'react'
import { MasonryPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/masonry.css'

import smallImages from '../metaData/photoGallery'
import ResponsiveImage from '../components/responsiveImage'

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

    const navigateToBlogPost = () => {
        window.location.href = '/community/gettingBoulder'
    }

    return (
        <div className="grid-container full">
            <div className="text-card-light grid-container halves">
                <ResponsiveImage image="blog" radius="rounded" />
                <div className="flex flex-col fc-center">
                    <h2 className="h2-primary">Coming soon...</h2>
                    <p>
                        We will be republishing our Women Crush Wednesday Blog!
                        (Originally published 2018-2021) Stay tuned to hear from
                        the amazing women of our communnity!
                    </p>
                    <p>
                        In the meantime, click here to read our first ever blog
                        post, the story of how VertiGals Started!
                    </p>
                    <h3 className="h3-accent link" onClick={navigateToBlogPost}>
                        GETTING BOULDER
                    </h3>
                    <br />
                    <p>
                        Interested in being the author of future WCW blog posts?
                        Email us a northshorevertigals@gmail.com
                    </p>
                </div>
            </div>
            <h1 className="h1-accent">Community Gallery</h1>
            <h3 className="h3-primary">
                Whether we are together, or off on our own
                adventures...VertiGals CLIMB HARD
            </h3>
            <MasonryPhotoAlbum photos={shuffledArray} />
        </div>
    )
}
