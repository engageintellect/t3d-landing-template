export default function Footer () {
  return (
		<>
  	  <div className="navbar sticky top-0 z-10 bg-neutral-900 py-2 text-lg text-white">
      	<div className="mx-2 md:mx-10">
        	<div className="grid grid-cols-2 items-center">
          	<div className="flex justify-start text-xl">
            	<a href="/">
              	{/* Ne<span className="text-purple-500">x</span>um */}
              	Footer Title
            	</a>
          	</div>

          	<div className="flex justify-end">
            	<a href="/">
              	<div className="cursor-pointer rounded-full bg-purple-700 px-2 hover:scale-105 hover:bg-purple-600">
                	v0.0.1
              	</div>
            	</a>
          	</div>
        	</div>
      	</div>
    	</div>
		</>
  );
};

