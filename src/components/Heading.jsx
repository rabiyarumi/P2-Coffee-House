
const Heading = ({title, subtitle}) => {
    return (
        <div className='text-center font-bold my-10 space-y-4'>
            <h1 className='text-5xl'>{title}</h1>
            <p className='2xl '>{subtitle}</p>
        </div>
    );
};

export default Heading;