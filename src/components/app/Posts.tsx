import Card from "../shared/Card"
import Divider from "../shared/Divider"

const Posts = () => {
    return (
        <div className="space-y-8">
            {
                Array(20).fill(0).map((item, index) => (
                    <Card
                        key={index?.toString()}
                    >
                        <>

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque mollitia beatae autem maxime laudantium ratione at dolore dolores, ipsum est quos, nesciunt nisi ipsa alias, libero praesentium voluptatum voluptates expedita!</p>
                            <div className="flex items-center justify-between my-3">
                                <label className="text-xs text-gray-600 lowercase">
                                    <span className="capitalize">Jan 5, 2023 </span>04:36 pm
                                </label>
                                <div className="space-x-3">
                                    <i className="ri-file-edit-line text-zinc-400 text-xs hover:text-green-500"></i>
                                    <i className="ri-delete-bin-6-line text-zinc-400 text-xs hover:text-rose-500"></i>
                                </div>
                            </div>
                            <Divider />
                            sdd
                        </>

                    </Card>
                ))
            }
        </div>
    )
}

export default Posts
