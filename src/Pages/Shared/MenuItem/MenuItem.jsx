function MenuItem({ item }) {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex items-center space-x-2">
            <img
                style={{ borderRadius: '0 200px 200px 200px' }}
                className="w-[100px]"
                src={image}
                alt=""
            />
            <div>
                <h3 className="uppercase text-xl font-cinzel text-cinder">{name} ----------</h3>
                <p className="text-smokeyGrey text-base">{recipe}</p>
            </div>
            <p className="text-yellowOchre text-xl">${price}</p>
        </div>
    );
}

export default MenuItem;
