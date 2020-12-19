import React from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

export const FavButton = ({ item }) => {
    return (
        <div>
            {item.like
                ? (
                    <div className='fav-link'
                    // onClick={() => addToFavorites(meal)}
                    >
                        <span className='text-link'>Favorite</span>
                        <FaHeart
                            className={'heart-filled'} size='1.5em' color={'#FF695B'} />
                    </div>
                )
                : (
                    <div className='fav-link'
                    // onClick={() => addToFavorites(meal)}
                    >
                        <span className='text-link'>Favorite</span>
                        <FaRegHeart
                            className={'heart-outlined'} size='1.5em' color={'#BABBC2'} />
                    </div>
                )
            }
        </div>
    )
}
