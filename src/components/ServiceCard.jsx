import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const location = useLocation();
  return (
    <>
      <div className=" w-[359px]  grid justify-items-center text-center items-center py-8 rounded-lg shadow-lg overflow-hidden bg-white mx-auto lg:mx-0 flex-grow">
        <div className="text-center p-4 rounded-full  bg-gray-100 ">
          <img src={service.serviceImage} alt="" className=" w-20 " />
        </div>
        <h5 className=" px-3 pt-3 pb-1 text-2xl font-semibold">
          {service.serviceName}
        </h5>
        <p className="px-6 py-2  font-normal">{service.description}</p>
        {location.pathname === '/' ? (
          <Link
            to="/services"
            className="px-3 pb-6 block font-normal text-blue-500"
          >
            Learn more
          </Link>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default ServiceCard;
