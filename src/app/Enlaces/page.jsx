'use client'

export default function () {

    return (
        <form className=" flex flex-col justify-center items-center ">
            <h1  >reguistro</h1>
            <div className="flex flex-col bg-slate-400">
                <input type="text" className=" m-2 " />
                <input type="text" className=" m-2" />
                <input type="text" className=" m-2" />
            </div>
            <div className="m-2 bg-slate-300">
                <button className="border-cyan-600">guardar</button>

            </div>
        </form>

    )
}