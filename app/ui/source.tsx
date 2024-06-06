export default function Source({name, url, tag, description}: {
    name: string;
    url: string;
    tag: string;
    description: string;
}) {
    function handleClick(){window.open(url, '_blank')}
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center p-5 m-2 cursor-pointer hover:cursor-hand"
             onClick={handleClick}>
            <h2 className="font-bold text-xl mb-2">{name}</h2>
            <p className="text-gray-700 text-base">{tag}</p>
            <p className="text-gray-700 text-base">{description}</p>
            <p className="text-gray-700 text-base">{url}</p>
        </div>
    );
};