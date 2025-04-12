'use client';
import React, {useEffect} from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { writtenContent } from '../metaData/writtenContent';
import ResponsiveImage from './responsiveImage';

export default function BoardMemberCards() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, containScroll: 'trimSnaps' });
    
    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])
    const { boardMembers } = writtenContent.about;

    const boardMemberList =  boardMembers.map((boardMember) => {
        const { name, position, bio } = boardMember;

        return (
            <div key={name} className="embla__slide board-member-card">
                <ResponsiveImage image={name.toLowerCase()} radius="wavy" />
                <h2 className="h2-card">{name}</h2>
                {position && <h3 className="h3-card">{position}</h3>}
                <p>{bio}</p>
            </div>
        );
    });

    return (
        <div className="embla" ref={emblaRef}>
        <div className="embla__container grid-container board-member-cards">
            {boardMemberList}
        </div>
        </div>
    )
}
