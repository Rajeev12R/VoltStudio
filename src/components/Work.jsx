import React, {useEffect} from 'react';
import { images } from '../assets/assets.js';
import { Fancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Work = () => {
    useEffect(() => {
      Fancybox.bind("[data-fancybox='gallery']", {
        loop: true,
      });
  
      return () => Fancybox.destroy();
    }, []);
    
  return (
    <div className="work my-10 mx-auto w-full max-w-[1400px] px-4" id="gallery">
      <div className="flex justify-center items-center">
        <h2 className="text-center text-3xl font-bold my-8 tracking-wide text-stone-600">
          Our Work
        </h2>
      </div>

      <div className=" grid gap-4 p-4 sm:gap-6 md:gap-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="h-[300px] rounded-lg overflow-hidden">
            <img
              src={images[0]}
              alt="Gallery Image 0"
              data-fancybox="gallery"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[150px] rounded-lg overflow-hidden">
              <img
                src={images[1]}
                alt="Gallery Image 1"
                data-fancybox="gallery"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
            <div className="h-[150px] rounded-lg overflow-hidden">
              <img
                src={images[2]}
                alt="Gallery Image 2"
                data-fancybox="gallery"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </div>
          <div className="h-[300px] rounded-lg overflow-hidden">
            <img
              src={images[3]}
              alt="Gallery Image 3"
              data-fancybox="gallery"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            <div className="h-[200px] rounded-lg overflow-hidden">
              <img
                src={images[4]}
                alt="Gallery Image 4"
                data-fancybox="gallery"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
            <div className="h-[200px] rounded-lg overflow-hidden">
              <img
                src={images[5]}
                alt="Gallery Image 5"
                data-fancybox="gallery"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <img
              src={images[6]}
              alt="Gallery Image 6"
              data-fancybox="gallery"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[200px] rounded-lg overflow-hidden">
              <img
                src={images[7]}
                alt="Gallery Image 7"
                data-fancybox="gallery"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
            <div className="h-[200px] rounded-lg overflow-hidden">
              <img
                src={images[8]}
                alt="Gallery Image 8"
                data-fancybox="gallery"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="h-[400px] rounded-lg overflow-hidden">
            <img
              src={images[9]}
              alt="Gallery Image 9"
              data-fancybox="gallery"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <img
              src={images[10]}
              alt="Gallery Image 10"
              data-fancybox="gallery"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <img
              src={images[11]}
              alt="Gallery Image 11"
              data-fancybox="gallery"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
