export default function Ex3 () {
    return (
        <div className="w-full min-h-screen bg-black text-white flex flex-col items-center">
            <h1 className="text-2xl mb-10">Chat Simples</h1>
            <div>
            <p>Qual seu nome?</p>
                <div className="flex flex-row">
                    <input
                        type="text"
                        className="border-2 border-gray-400 bg-gray-900 min-w-3xs"
                        />
                    <button className="ml-5 border-2 p-2 border-gray-400 bg-gray-900">Iniciar chat</button>    
                </div>
            </div>
        </div>
    )
}