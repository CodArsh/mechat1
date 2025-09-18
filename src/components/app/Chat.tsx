import React from 'react'
import Input from '../shared/Input'
import Button from '../shared/Button'

const Chat = () => {
    return (
        <div>
            <div className='h-[480px] overflow-auto space-y-12'>
                {
                    Array(10).fill(1).map((item, index) => (
                        <div className='space-y-12' key={index.toString()}>
                            <div className='flex gap-4 flex items-start'>
                                <div className='bg-stone-200 rounded-full h-8 w-8 flex items-center justify-center'>
                                    <i className="ri-user-fill text-2xl"></i>
                                </div>
                                <div
                                    className='relative px-3 py-2 rounded flex-1'
                                    style=
                                    {{
                                        backgroundImage: 'linear-gradient( 89.7deg,  rgba(0,0,0,0.9) -10.7%, rgba(53,92,125,1) 88.8% )'
                                    }}
                                >
                                    <h2 className='font-medium text-stone-200 mb-1'>Arsh</h2>
                                    <label className='text-stone-300'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </label>
                                    <i className="ri-arrow-left-s-fill text-[rgba(0,0,0,0.9)] absolute top-[-11px] left-[-22px] text-4xl"></i>
                                </div>
                            </div>

                            <div className='flex gap-4 flex items-start '>
                                <div
                                    className='relative px-3 py-2 rounded flex-1 bg-stone-200'
                                >
                                    <h2 className='font-medium text-black mb-1 flex justify-end'>Javid Nazeer</h2>
                                    <label className='text-black '>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </label>
                                    <i className="ri-arrow-right-s-fill text-stone-200 absolute top-[-11px] right-[-22px] text-4xl"></i>
                                </div>
                                <div className='bg-stone-200 rounded-full h-8 w-8 flex items-center justify-center'>
                                    <i className="ri-user-fill text-2xl"></i>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='p-3'>
                <div className='flex items-center gap-2'>
                    <form className='flex gap-2 flex-1'>
                        <Input name='message' placeholder='type your message here' />
                        <Button type='danger' icon='send-plane-fill'>
                          &nbsp;Send
                        </Button>
                    </form>

                    <Button type='dark'>
                        <i className='text-lg ri-attachment-2'></i>
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default Chat
