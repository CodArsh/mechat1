import React from 'react'

const Video = () => {
    return (
        <div>
            <div className='bg-black w-full h-0 relative pb-[56.25%] rounded'>
                <video className='w-full h-full absolute top-0 left-0'></video>
                <button className='absolute bottom-5 left-5 text-xs px-2.5 py-1 rounded text-white'
                    style={{
                        background: 'rgba(255, 255, 255, 0.1)'
                    }}
                >
                    Misbah ul haq
                </button>

                <button className='absolute top-5 right-5 text-xs px-2.5 py-1 rounded text-white bg-zinc-800 hover:bg-zinc-700 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-115'>
                    <i className="ri-fullscreen-line"></i>
                </button>

                <div className='bg-zinc-800 m-2 w-[200px] h-[140px] absolute bottom-0 right-0 rounded'>
                    <video className='w-full h-2 absolute top-0 right-0'></video>
                    <button className='absolute bottom-2 left-2 text-xs px-2.5 py-1 rounded text-white'
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        Shahid Khan
                    </button>
                </div>
            </div>

            <div className='mt-4 flex justify-center gap-3 items-center'>
                <button className='bg-cyan-50 text-cyan-500 h-8 w-8 rounded hover:bg-cyan-500 hover:text-white'>
                    <i className='ri-mic-line'></i>
                </button>

                <button className='bg-cyan-50 text-cyan-500 h-8 w-8 rounded hover:bg-cyan-500 hover:text-white'>
                    <i className='ri-video-on-line'></i>
                </button>

                <button className='bg-red-500 text-white h-10 w-10 rounded hover:bg-red-800 hover:text-white'>
                    <i className='ri-phone-fill text-xl'></i>
                </button>

                <button className='bg-cyan-50 text-cyan-500 h-8 w-8 rounded hover:bg-cyan-500 hover:text-white'>
                    <i className='ri-export-fill'></i>
                </button>

                <button className='bg-cyan-50 text-cyan-500 h-8 w-8 rounded hover:bg-cyan-500 hover:text-white'>
                    <i className='ri-user-add-line'></i>
                </button>
            </div>
        </div>
    )
}

export default Video
