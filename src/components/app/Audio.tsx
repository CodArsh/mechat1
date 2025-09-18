import React from 'react'
import Card from '../shared/Card'

const Audio = () => {
    return (
        <div>
            <div className='items-center justify-center flex'>
                <Card>
                <div className='rounded-full p-2 bg-stone-300 h-30 w-30 flex items-center justify-center'>
                    <i className="ri-user-voice-fill text-7xl"></i>
                </div>
            </Card>
            </div>

            <div className='mt-4 flex justify-center gap-3 items-center'>
                <button className='bg-cyan-50 text-cyan-500 h-8 w-8 rounded hover:bg-cyan-500 hover:text-white'>
                    <i className='ri-mic-line'></i>
                </button>

                <button className='bg-red-500 text-white h-10 w-10 rounded hover:bg-red-800 hover:text-white'>
                    <i className='ri-phone-fill text-xl'></i>
                </button>

                <button className='bg-cyan-50 text-cyan-500 h-8 w-8 rounded hover:bg-cyan-500 hover:text-white'>
                    <i className='ri-user-add-line'></i>
                </button>
            </div>
        </div>
    )
}

export default Audio
