import Card from "../shared/Card"

const Friends = () => {
    return (
        <div className="grid grid-cols-5 gap-6">
            {
                Array(20).fill(1).map((item, index) => (
                    <Card key={index.toString()}>
                        <div key={index?.toString()} className='grid flex justify-center items-center'>
                            <div className='text-center relative'>
                                <i className='ri-user-fill border border-gray-200 h-8 w-8 rounded-full text-4xl'></i>
                            </div>
                            <label className='text-xs flex text-center items-center justify-center mt-4 font-bold'>{'Salman Malik'}</label>
                        </div>
                    </Card>
                ))
            }
        </div>
    )
}

export default Friends
