import React, { useEffect, useState } from 'react';
import VTUheader from '../screen/VTUheader';
import DataPlans from './dataPlan';
import axios from "axios";
import { motion } from 'framer-motion';
// Network services with prices, validity, and data (updated with +40 to prices)
const services = {
  MTN: [
    { id: 78, data: "500MB", price: parseInt("N130".replace('N', '')) + 40, validity: "30 DAYS", plan: "SME 500MB", api: "N130" },
    { id: 79, data: "1.0GB", price: parseInt("N259".replace('N', '')) + 40, validity: "30 DAYS", plan: "SME 1.0GB", api: "N259" },
    { id: 80, data: "2.0GB", price: parseInt("N518".replace('N', '')) + 40, validity: "30 DAYS", plan: "SME 2.0GB", api: "N518" },
    { id: 81, data: "3.0GB", price: parseInt("N777".replace('N', '')) + 40, validity: "30 DAYS", plan: "SME 3.0GB", api: "N777" },
    { id: 82, data: "5.0GB", price: parseInt("N1295".replace('N', '')) + 40, validity: "30 DAYS", plan: "SME 5.0GB", api: "N1295" },
    { id: 83, data: "10.0GB", price: parseInt("N2590".replace('N', '')) + 40, validity: "30 DAYS", plan: "SME 10.0GB", api: "N2590" },
    { id: 85, data: "1.0GB", price: parseInt("N260".replace('N', '')) + 40, validity: "30 DAYS", plan: "CG 1.0GB", api: "N260" },
    { id: 86, data: "2.0GB", price: parseInt("N520".replace('N', '')) + 40, validity: "30 DAYS", plan: "CG 2.0GB", api: "N520" },
    { id: 87, data: "3.0GB", price: parseInt("N780".replace('N', '')) + 40, validity: "30 DAYS", plan: "CG 3.0GB", api: "N780" },
    { id: 88, data: "5.0GB", price: parseInt("N1300".replace('N', '')) + 40, validity: "30 DAYS", plan: "CG 5.0GB", api: "N1300" },
    { id: 89, data: "10.0GB", price: parseInt("N2600".replace('N', '')) + 40, validity: "30 DAYS", plan: "CG 10.0GB", api: "N2600" },
    { id: 90, data: "500MB", price: parseInt("N128".replace('N', '')) + 40, validity: "30 DAYS", plan: "SME2 500MB", api: "N128" },
    { id: 91, data: "1.0GB", price: parseInt("N255".replace('N', '')) + 40, validity: "30 DAYS", plan: "SME2 1.0GB", api: "N255" },
    { id: 93, data: "2.0GB", price: parseInt("N510".replace('N', '')) + 40, validity: "30 DAYS", plan: "SME2 2.0GB", api: "N510" },
    { id: 94, data: "3.0GB", price: parseInt("N765".replace('N', '')) + 40, validity: "30 DAYS", plan: "SME2 3.0GB", api: "N765" },
    { id: 97, data: "5.0GB", price: parseInt("N1275".replace('N', '')) + 40, validity: "30 DAYS", plan: "SME2 5.0GB", api: "N1275" },
  ],
  GLO: [
    { id: 99, data: "500MB", price: parseInt("N133".replace('N', '')) + 40, validity: "30 DAYS", plan: "GLO CG 500MB", api: "N133" },
    { id: 102, data: "1.0GB", price: parseInt("N266".replace('N', '')) + 40, validity: "30 DAYS", plan: "GLO CG 1.0GB", api: "N266" },
    { id: 103, data: "2.0GB", price: parseInt("N532".replace('N', '')) + 40, validity: "30 DAYS", plan: "GLO CG 2.0GB", api: "N532" },
    { id: 104, data: "3.0GB", price: parseInt("N798".replace('N', '')) + 40, validity: "30 DAYS", plan: "GLO CG 3.0GB", api: "N798" },
    { id: 105, data: "5.0GB", price: parseInt("N1330".replace('N', '')) + 40, validity: "30 DAYS", plan: "GLO CG 5.0GB", api: "N1330" },
    { id: 161, data: "200MB", price: parseInt("N67".replace('N', '')) + 40, validity: "30 DAYS", plan: "GLO CG 200MB", api: "N67" },
    { id: 196, data: "10.0GB", price: parseInt("N2660".replace('N', '')) + 40, validity: "30 DAYS", plan: "GLO CG 10.0GB", api: "N2660" },
  ],
  AIRTEL: [
    { id: 107, data: "500MB", price: parseInt("N137".replace('N', '')) + 40, validity: "30 DAYS", plan: "AIRTEL CG 500MB", api: "N137" },
    { id: 108, data: "1.0GB", price: parseInt("N272".replace('N', '')) + 40, validity: "30 DAYS", plan: "AIRTEL CG 1.0GB", api: "N272" },
    { id: 109, data: "2.0GB", price: parseInt("N544".replace('N', '')) + 40, validity: "30 DAYS", plan: "AIRTEL CG 2.0GB", api: "N544" },
    { id: 110, data: "5.0GB", price: parseInt("N1360".replace('N', '')) + 40, validity: "30 DAYS", plan: "AIRTEL CG 5.0GB", api: "N1360" },
    { id: 111, data: "10.0GB", price: parseInt("N2720".replace('N', '')) + 40, validity: "30 DAYS", plan: "AIRTEL CG 10.0GB", api: "N2720" },
    { id: 159, data: "100MB", price: parseInt("N49".replace('N', '')) + 40, validity: "30 DAYS", plan: "AIRTEL CG 100MB", api: "N49" },
    { id: 160, data: "300MB", price: parseInt("N86".replace('N', '')) + 40, validity: "30 DAYS", plan: "AIRTEL CG 300MB", api: "N86" },
  ],
  '9MOBILE': [
    { id: 170, data: "10.0GB", price: parseInt("N1350".replace('N', '')) + 40, validity: "30 DAYS", plan: "9MOBILE 10.0GB", api: "N1350" },
    { id: 171, data: "1.5GB", price: parseInt("N205".replace('N', '')) + 40, validity: "30 DAYS", plan: "9MOBILE 1.5GB", api: "N205" },
    { id: 112, data: "500MB", price: parseInt("N73".replace('N', '')) + 40, validity: "30 DAYS", plan: "9MOBILE 500MB", api: "N73" },
    { id: 113, data: "1.0GB", price: parseInt("N135".replace('N', '')) + 40, validity: "30 DAYS", plan: "9MOBILE 1.0GB", api: "N135" },
    { id: 114, data: "2.0GB", price: parseInt("N270".replace('N', '')) + 40, validity: "30 DAYS", plan: "9MOBILE 2.0GB", api: "N270" },
    { id: 115, data: "3.0GB", price: parseInt("N405".replace('N', '')) + 40, validity: "30 DAYS", plan: "9MOBILE 3.0GB", api: "N405" },
    { id: 116, data: "5.0GB", price: parseInt("N675".replace('N', '')) + 40, validity: "30 DAYS", plan: "9MOBILE 5.0GB", api: "N675" },
  ],
};


export default function Glo() {
  const [selectedNetwork, setSelectedNetwork] = useState("MTN");
  const [selectedPlan, setSelectedPlan] = useState(services[selectedNetwork][0].id);

  const handleNetworkChange = (event) => {
    const network = event.target.value;
    setSelectedNetwork(network);
    setSelectedPlan(services[network][0].id);
  };

  const handlePlanChange = (event) => {
    setSelectedPlan(parseInt(event.target.value));
  };
  useEffect(()=>{
    let get = async()=>{
      let res = await axios.get("http://localhost:9090/api");
      console.log(res.data)
    }
    get()
  },[])
  return (
    <div className="flex items-center justify-center h-full overflow-hidden bg-gradient-to-r from-slate-700 to-slate-800">
    <div className='relative flex flex-row flex-wrap w-full h-full gap-40 pt-32 pb-20 top-10 lg:left-60'>
    <motion.div
        className="w-full max-w-lg p-10 rounded-lg shadow-xl bg-slate-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <VTUheader />
       <form>
        <div className="mt-6 mb-6 text-3xl font-semibold text-center text-white -top-96">
          Select Your Network & Plan
        </div>
        <div className="space-y-5">
          {/* Network Select */}
          <motion.select
            value={selectedNetwork}
            onChange={handleNetworkChange}
            className="w-full p-4 text-lg transition duration-300 ease-in-out rounded-md outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {Object.keys(services).map((network) => (
              <option className='rounded-md' key={network} value={network}>
                {network}
              </option>
            ))}
          </motion.select>
          <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 mb-4 border rounded-lg outline-none"
            />
          {/* Plan Select */}
          <motion.select
            value={selectedPlan}
            onChange={handlePlanChange}
            className="w-full p-4 text-lg transition duration-300 ease-in-out rounded-md focus:outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {services[selectedNetwork].map((plan) => (
              <option key={plan.id} value={plan.id}>
                {`${plan.plan} = N${plan.price} for (${plan.validity})`}
              </option>
            ))}
          </motion.select>
        </div>
      
            <button className="relative w-full py-3 text-white transition duration-300 bg-yellow-400 rounded-lg top-4 hover:bg-yellow-500"  type="submit">
              Buy Data
            </button>
        </form>
        {/* Display Data Plans */}
        
      </motion.div>
      <motion.div
        className="w-full max-w-lg p-10 rounded-lg shadow-xl bg-slate-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <VTUheader />
       <form>
        <div className="mt-6 mb-6 text-3xl font-semibold text-center text-white -top-96">
          Select Your Network & Amount
        </div>
        <div className="space-y-5">
          {/* Network Select */}
          <motion.select
            value={selectedNetwork}
            onChange={handleNetworkChange}
            className="w-full p-4 text-lg transition duration-300 ease-in-out rounded-md outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {Object.keys(services).map((network) => (
              <option className='rounded-md' key={network} value={network}>
                {network}
              </option>
            ))}
          </motion.select>
          <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 mb-4 border rounded-lg outline-none"
            />
          <input
              type="number"
              placeholder="Amount"
              className="w-full p-3 mb-4 border rounded-lg outline-none"
            />
         
        </div>
      
            <button className="relative w-full py-3 text-white transition duration-300 bg-yellow-400 rounded-lg top-4 hover:bg-yellow-500"  type="submit">
              Buy Airtime
            </button>
        </form>
        {/* Display Data Plans */}
        
      </motion.div>
    </div>
    </div>
  );
}