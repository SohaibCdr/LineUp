/** @type {import('tailwindcss').Config} */
export default {
  
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'opacity-25': '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
        'opacity-50': '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
        'opacity-75': '0 1px 2px 0 rgba(0, 0, 0, 0.75)',
      },
      borderRadius: {
        '20': '20px',
      },
      colors:{
        primary:'#1D154A',
        secondary:'#1AD3A7',
        costumGreen:'#BBFDE1',
        background:'#EEF3F1',
        gray:'#CDC5C5',
        back: '#EEF3F1',
        lightGry : '#CDC5C5',
        popUp :'#111827'
       
  
      
      },
      boxShadow: {
        'sdw': '0px 0px 20px 20px rgba(0, 0, 0, 0.1)',
        'text-sdw':"0px 4px 10px 0px #00000040",
       
      },
      fontFamily:{
        body :['Inter'],
    },
    zIndex: {
      '-10': '-10', // 
    },
    
  },
  plugins: [],
}
}
