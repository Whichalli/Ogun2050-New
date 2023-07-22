define([], function() {
  'use strict';

  return {
    EXAMPLES: [
      { category: 'Extreme Pathways', name: 'Doesn\'t tackle climate change', slug: 'blank-example', values: '10111111111111110111111001111110111101101101110110111' },
      { category: 'Extreme Pathways', name: 'Maximum demand, no supply', slug: 'max-demand-no-supply-example', values: '10111111111111110111111004424440444404203304440420111' },
      { category: 'Extreme Pathways', name: 'Maximum supply, no demand', slug: 'max-supply-no-demand-example', values: '40444444444444440443424001121110111101102101110110111' },
      { category: 'Government Pathways', name: 'Analagous to MARKAL 3.26', slug: 'markal-326-example', values: 'i0g2dd2pp1121f1i0322112004314110433304202304320420121' },
      { category: 'Government Pathways', name: 'Higher renewables, more energy efficiency', slug: 'high-renewables-more-energy-efficiency-example', values: 'e0d3jrg221ci12110222112004423220444404202304440420141' },
      { category: 'Government Pathways', name: 'Higher nuclear, less energy efficiency', slug: 'high-nuclear-less-energy-efficiency-example', values: 'r013ce11111111110422334002322220233302202102330220121' },
      { category: 'Government Pathways', name: 'Higher CCS, more bioenergy', slug: 'high-css-more-bioenergy-example', values: 'f023df111111111f0322123003223220333203102303430310221' },
      { category: 'Government Pathways', name: 'Low cost pathway', slug: 'low-cost-example', values: 'q0111111111111110324131004314110434104103204440410111' },
      { category: '3rd Party Pathways', name: 'Friends of the Earth', slug: 'friends-of-the-earth-example', values: '10h4nn4431w23y110244111004424440343304202304430420441' },
      { category: '3rd Party Pathways', name: 'Campaign to Protect Rural England', slug: 'campaign-to-protect-rural-england', values: '10h2pdppp12332130233122004414430343304102304430410231' },
      { category: '3rd Party Pathways', name: 'Mark Brinkley', slug: 'mark-brinkley', values: '20222144411341110343321003422440423404203203340420141' },
      { category: '3rd Party Pathways', name: 'National Grid', slug: 'national-grid', values: 'h0h2gg1211cj1j110322222003313230234102102203440320121' },
      { category: '3rd Party Pathways', name: 'Atkins', slug: 'atkins-example', values: 'g0f2oj11t1rgqj1j0343111003324240244104201304430420231' },
      { category: '3rd Party Pathways', name: 'Association for Conservation of Energy', slug: 'ace-example', values: '10f2r1jop1f211110344111004113330243304202304330420141' },
      { category: '3rd Party Pathways', name: 'Sustainable Energy Association', slug: 'sea-example', values: 'e0c1gc11112211b10344112004114330444104202304310420121' }
    ],

    PATHWAY_ACTIONS: [
      { name: "Domestic transport behaviour", categoryId: 1, typeId: 1, pathwayStringIndex: 25, tooltips: {
         "1": "In 2050, individuals travel 9% further than today. No noticeable modal shift.",
         "2": "Individuals travel 7% further than today, cars and vans are 80% of 2050 passenger mileage",
         "3": "Individuals travel 7% further than today; cars and vans 74% of 2050 passenger mileage",
         "4": "In 2050, individuals travel the same distance as today. Signficant shift to public transport."
       }, pdf: "/assets/onepage/23.pdf", info: "demand/domestic-transport-behaviour" },

      { name: "Shift to zero emission transport", categoryId: 1, typeId: 1, pathwayStringIndex: 26, tooltips: {
         "1": "By 2050, 20% plug in hybrid electric cars; 2.5% zero emission cars.",
         "2": "By 2050, 54% plug-in hybrid vehicles; 11%  zero emission vehicles, all buses hybrids.",
         "3": "By 2050, 32% plug-in hybrid vehicles; 48% zero emission vehicles; 22% buses electric.",
         "4": "By 2050 100%  zero emission vehiclesl; all passenger trains electrified; 50% bus electrified "
       }, pdf: "/assets/onepage/24.pdf", info: "demand/shift-to-zero-emission-transport" },

      { name: "Choice of fuel cells or batteries", categoryId: 1, typeId: 1, pathwayStringIndex: 27, tooltips: {
         "1": "100% of zero emission cars use batteries by 2050",
         "2": "Among zero emission cars, 80% use batteries and 20% use fuel cells by 2050",
         "3": "Among zero emission cars, 20% use batteries and 80% use fuel cells by 2050",
         "4": "100% of zero emission cars use fuel cells by 2050"
       }, pdf: "/assets/onepage/FuelCellsOrBatteries.pdf", info: "demand/choice-of-fuel-cells-or-batteries" },

      { name: "Domestic freight", categoryId: 1, typeId: 1, pathwayStringIndex: 28, tooltips: {
         "1": "Road haulage makes up 73% of distance, using conventional engines. Rail all diesel",
         "2": "Some shift from road to rail and water, and more efficient engines",
         "3": "Greater modal shift to rail and water; more efficient HGVs; more efficient logistics",
         "4": "Road modal share falls to half; greater hybridisation. Rail freight is all electric "
       }, pdf: "/assets/onepage/25.pdf", info: "demand/domestic-freight" },

      { name: "International aviation", categoryId: 1, typeId: 1, pathwayStringIndex: 29, tooltips: {
         "1": "By 2050, 130% passengers increase; 50% more fuel use",
         "2": "By 2050, 130% passengers increase; 45% more fuel use",
         "3": "By 2050, 130% passengers increase; 31% more fuel use",
         "4": "By 2050, 85% passengers increase; 5% more fuel use"
       }, pdf: "/assets/onepage/InternationalAviation.pdf", info: "demand/international-aviation" },

      { name: "International shipping", categoryId: 1, typeId: 1, pathwayStringIndex: 30, tooltips: {
         "1": "no improvements from energy efficiency; between 2007 and 2050 emissions increase by 139%",
         "2": "1/3 of technical feasible reductions realised; between 2007 and 2050 emissions increase by 78%",
         "3": "2/3 of technical feasible reductions realised; between 2007 and 2050 emissions increase by 16%",
         "4": "maximum technical feasible reductions realised; between 2007 and 2050 emissions decrease by 46%"
       }, pdf: "/assets/onepage/InternationalShipping.pdf", info: "demand/international-shipping" },

      { name: "Average temperature of homes", categoryId: 1, typeId: 1, pathwayStringIndex: 32, tooltips: {
         "1": "Average room temperature increases to 20°C (a 2.5°C increase on 2007)",
         "2": "Average room temperature increases to 18°C (a 0.5°C increase on 2007)",
         "3": "Average room temperature decreases to 17°C (a 0.5°C decrease on 2007)",
         "4": "Average room temperature decreases to 16°C (a 1.5°C decrease on 2007)"
       }, pdf: "/assets/onepage/29.pdf", info: "demand/average-temperature-of-homes" },

      { name: "Home insulation", categoryId: 1, typeId: 1, pathwayStringIndex: 33, tooltips: {
         "1": "Over 7m homes insulated, average thermal leakiness falls by 25%",
         "2": "Over 8m homes insulated, average thermal leakiness falls by 33%",
         "3": "Over 18m homes insulated, average thermal leakiness falls by 42%",
         "4": "Over 24m homes insulated, average thermal leakiness decreases by 50% "
       }, pdf: "/assets/onepage/30.pdf", info: "demand/home-insulation" },

      { name: "Home heating electrification", categoryId: 1, typeId: 3, value: 'A', pathwayStringIndex: 34, tooltips: {
         "1": "The proportion of domestic heat supplied using electricity is 0-10%, as today",
         "2": "The proportion of new domestic heating systems using electricity is 20%",
         "3": "The proportion of new domestic heating systems supplied using electricity is 30-60%",
         "4": "The proportion of new domestic heating systems supplied using electricity is 80-100%"
       }, pdf: "/assets/onepage/31.pdf", info: "demand/heating-choices" },

      { name: "Home heating that isn't electric", categoryId: 1, typeId: 3, value: 'A', pathwayStringIndex: 35, tooltips: {
         "1": "The dominant non-electric heat source is gas or gas CHP (biogas if available)",
         "2": "The dominant non-electric heat source is coal or coal CHP (biomass if available)",
         "3": "The dominant non-electric heat source is waste heat from power stations",
         "4": "A mixture of gas/biogas; coal/biomass; and heat from power stations"
       }, pdf: "/assets/onepage/31.pdf", info: "demand/home-heating-that-isnt-electric" },

      { name: "Home lighting & appliances", categoryId: 1, typeId: 1, pathwayStringIndex: 37, tooltips: {
         "1": "Energy demand for domestic lights and appliances increases by 20% (relative to 2007)",
         "2": "Energy demand for domestic lights and appliances is stable",
         "3": "Energy demand for domestic lights and appliances decreases by 40%",
         "4": "Energy demand for domestic lights and appliances decreases by 60%"
       }, pdf: "/assets/onepage/34.pdf", info: "demand/lightning-and-appliances"  },

      { name: "Electrification of home cooking", categoryId: 1, typeId: 3, value: 'A', max: 2, pathwayStringIndex: 38, tooltips: {
         "1": "Energy used for domestic cooking remains at 63% electricity and 37% gas",
         "2": "Energy used for domestic cooking is entirely electric"
      }, pdf: "/assets/onepage/35.pdf", info: "demand/electrification-of-cooking" },

      { name: "Growth in industry", categoryId: 1, typeId: 3, value: 'A', max: 3, pathwayStringIndex: 40, tooltips: {
         "1": "UK industry output more than doubles by 2050",
         "2": "UK industry grows in line with current trends",
         "3": "UK industry output falls 30-40% by 2050"
      }, pdf: "/assets/onepage/37.pdf", info: "demand/growth-in-industry" },

      { name: "Energy intensity of industry", categoryId: 1, typeId: 3, max: 3, pathwayStringIndex: 41, tooltips: {
         "1": "No electrification of processes, little improvement in energy intensity",
         "2": "Some processes electrified; moderate improvements in process emissions and energy demand",
         "3": "High electrification; CCS captures 48% of emissions; process emissions reduced"
      }, pdf: "/assets/onepage/38.pdf", info: "demand/energy-intensity-of-industry" },

      { name: "Commercial demand for heating and cooling", categoryId: 1, typeId: 1, pathwayStringIndex: 43, tooltips: {
         "1": "Space heating demand increases by 50%, hot water demand by 60%, cooling demand by 250%",
         "2": "Space heating demand increases by 30%, hot water demand by 50%, cooling demand by 60%",
         "3": "Space heating demand stable, hot water demand increases by 25%, cooling demand stable",
         "4": "Space heating demand drops by 25%, hot water demand by 10%, cooling demand by 60%"
         }, pdf: "/assets/onepage/40.pdf", info: 'demand/commercial-demand-for-heating-and-cooling' },

      { name: "Commercial heating electrification", categoryId: 1, typeId: 3, value: 'A', pathwayStringIndex: 44, tooltips: {
         "1": "The proportion of non-domestic heat supplied using electricity is 0-10%, as today",
         "2": "The proportion of non-domestic heat supplied using electricity is 20%",
         "3": "The proportion of non-domestic heat supplied using electricity is 30-60%",
         "4": "The proportion of non-domestic heat supplied using electricity is 80-100%"
         }, pdf: "/assets/onepage/31.pdf", info: 'demand/heating-choices' },

      { name: "Commercial heating that isn't electric", categoryId: 1, typeId: 3, value: 'A', pathwayStringIndex: 45, tooltips: {
         "1": "The dominant non-electric heat source is gas or gas CHP (biogas if available)",
         "2": "The dominant non-electric heat source is coal or coal CHP (biomass if available)",
         "3": "The dominant non-electric heat source is heat from power stations",
         "4": "A mixture of gas/biogas, coal/biomass, and heat from power stations"
         }, pdf: "/assets/onepage/31.pdf", info: "demand/home-heating-that-isnt-electric" },

      { name: "Commercial lighting & appliances", categoryId: 1, typeId: 1, pathwayStringIndex: 47, tooltips: {
         "1": "Energy demand for lights & appliances increases by 33%. Energy for cooking is stable",
         "2": "Energy demand for lights & appliances increases by 15%; decreases by 5% for cooking",
         "3": "Energy demand for lights & appliances decreases by 5%; decreases by 20% for cooking",
         "4": "Energy demand for lights & appliances decreases by 30%; decreases by 25% for cooking"
         }, pdf: "/assets/onepage/44.pdf", info: 'demand/lighting-and-appliances' },

      { name: "Electrification of commercial cooking", categoryId: 1, typeId: 3, value: 'A', max: 2, pathwayStringIndex: 48, tooltips: {
         "1": "60% electricity and 40% gas (no change from 2007)",
         "2": "100% electric"
      }, pdf: "/assets/onepage/35.pdf", info: 'demand/electrification-of-cooking' },

      { name: "Nuclear power stations", categoryId: 2, typeId: 2, pathwayStringIndex: 0, tooltips: {
         "1": "No new nuclear power installed; estimated closure of final plant in 2035",
         "2": "~13 3GW power stations delivering ~280 TWh/yr",
         "3": "~30 3GW power stations delivering ~630 TWh/yr",
         "4": "~50 3GW power stations delivering ~1030 TWh/yr"
       }, pdf: "/assets/onepage/0.pdf", info: "supply/nuclear-power-stations" },

      { name: "CCS power stations", categoryId: 2, typeId: 2, pathwayStringIndex: 2, tooltips: {
         "1": "Demonstration plants only; no roll-out of CCS",
         "2": "~240 TWh/yr from 25-40 CCS power stations; comparable to current gas & coal generation",
         "3": "~340 TWh/yr from 35-60 CCS power stations; comparable to total current demand",
         "4": "~510 TWh/yr  from 50-90 CCS power stations; build rate of gas plants in the 1990s"
       }, pdf: "/assets/onepage/2.pdf", info: "supply/ccs-power-stations" },

      { name: "CCS power station fuel mix", categoryId: 2, typeId: 3, value: 'A', pathwayStringIndex: 3, tooltips: {
         "1": "100% coal/biomass, 0% gas/biogas CCS after demonstration plants",
         "2": "66% coal/biomass, 33% gas/biogas CCS after demonstration plants",
         "3": "33% coal/biomass, 66% gas/biogas CCS after demonstration plants",
         "4": "0% coal/biomas, 100% gas/biogas CCS after demonstration plants"
       }, pdf: "/assets/onepage/3.pdf", info: "supply/ccs-power-station-fuel-mix" },

      { name: "Offshore wind", categoryId: 2, typeId: 2, pathwayStringIndex: 4, tooltips: {
         "1": "~1,400 turbines in 2025, reducing to zero as decommissioned sites are not replanted",
         "2": "~10,000 turbines in 2050, delivering ~180 TWh/yr",
         "3": "~17,000 turbines in 2050, delivering ~310 TWh/yr",
         "4": "~40,000 turbines in 2050, delivering ~430 TWh/yr"
       }, pdf: "/assets/onepage/4.pdf", info: "supply/offshore-wind" },

      { name: "Onshore wind", categoryId: 2, typeId: 2, pathwayStringIndex: 5, tooltips: {
         "1": "~4,400 turbines in 2025, reducing to zero as decommissioned sites are not replanted",
         "2": "~8,000 turbines in 2050, delivering ~50 TWh/yr. ",
         "3": "~13,000 turbines in 2050, delivering ~80 TWh/yr",
         "4": "~20,000 turbines in 2050, delivering ~130 TWh/yr"
       }, pdf: "/assets/onepage/5.pdf", info: "supply/onshore-wind" },

      { name: "Wave", categoryId: 2, typeId: 2, pathwayStringIndex: 6, tooltips: {
         "1": "None in 2050",
         "2": "~300km of wave farms",
         "3": "~600km of wave farms",
         "4": "~900km of wave farms"
       }, pdf: "/assets/onepage/6.pdf" , info: "supply/wave" },

      { name: "Tidal Stream", categoryId: 2, typeId: 2, pathwayStringIndex: 7, tooltips: {
         "1": "None in 2050",
         "2": "1,000 tidal stream turbines",
         "3": "4,700 tidal stream turbines",
         "4": "10,600 tidal stream turbines"
       }, pdf: "/assets/onepage/TidalStream.pdf" , info: "supply/tidal-stream" },

      { name: "Tidal Range", categoryId: 2, typeId: 2, pathwayStringIndex: 8, tooltips: {
         "1": "None in  2050",
         "2": "3 small tidal range schemes",
         "3": "4 tidal range schemes",
         "4": "8 tidal range schemes"
       }, pdf: "/assets/onepage/TidalRange.pdf" , info: "supply/tidal-range" },

      { name: "Biomass power stations", categoryId: 2, typeId: 2, pathwayStringIndex: 9, tooltips: {
         "1": "Only plants built and under construction (0.6GW)",
         "2": "8GW power stations by 2050 delivering 62TWh/yr",
         "3": "12GW power stations by 2050 delivering 100TWh/yr",
         "4": "Over 20GW installed capacity by 2050 delivering 180TWh/yr"
       }, pdf: "/assets/onepage/7.pdf" , info: "supply/biomass-power-stations" },

      { name: "Solar panels for electricity", categoryId: 2, typeId: 2, pathwayStringIndex: 10, tooltips: {
         "1": "No significant solar PV capacity is installed",
         "2": "4m2 of photovoltaic panels per person in 2050, supplying ~60 TWh/yr of electricity",
         "3": "5.4m2 of photovoltaic panels per person in 2050, supplying ~80 TWh/yr",
         "4": "9.5m2 of photovoltaic panels per person – all suitable roof and facade space used"
         }, pdf: "/assets/onepage/8.pdf" , info: "supply/solar-panels-for-electricity" },

      { name: "Solar panels for hot water", categoryId: 2, typeId: 2, pathwayStringIndex: 11, tooltips: {
         "1": "As today, a negligible proportion of buildings have solar thermal in 2050",
         "2": "~30% of suitable buildings get ~30% of their hot water from solar thermal",
         "3": "All suitable buildings get ~30% of their hot water from solar thermal",
         "4": "All suitable buildings get ~60% of their hot water from solar thermal"
       }, pdf: "/assets/onepage/9.pdf", info: "supply/solar-panels-for-hot-water" },

      { name: "Geothermal electricity", categoryId: 2, typeId: 2, pathwayStringIndex: 12, tooltips: {
         "1": "No deployment of geothermal electricity generation",
         "2": "Supply of geothermal electricity grows slowly to 7 TWh/yr in 2035 and is sustained",
         "3": "Supply grows quickly reaching 21 TWh/yr by 2030 and is sustained",
         "4": "Supply grows rapidly reaching 35 TWh/yr by 2030 and is sustained"
       }, pdf: "/assets/onepage/10.pdf", info: "supply/geothermal-electricity" },

      { name: "Hydroelectric power stations", categoryId: 2, typeId: 2, pathwayStringIndex: 13, tooltips: {
         "1": "Supply of electricity is maintained at current levels of 5 TWh/yr",
         "2": "Supply grows slowly, reaching 7 TWh/yr by 2050",
         "3": "Supply grows more quickly, reaching 8 TWh/yr by 2030 and is sustained",
         "4": "Supply grows rapidly reaching 13 TWh/yr by 2035 and is sustained"
       }, pdf: "/assets/onepage/11.pdf", info: "supply/hydroelectric-power-stations" },

      { name: "Small-scale wind", categoryId: 2, typeId: 2, pathwayStringIndex: 14, tooltips: {
         "1": "As today, no discernable supply of electricity from micro-wind turbines",
         "2": "Supply increases to 1.3 TWh/yr by 2020 and is sustained",
         "3": "Installed in all ~450,000 suitable domestic properties; supplies 3.5 TWh/year from 2020",
         "4": "Installed in all suitable domestic and non-domestic sties; 8.9 TWh/year from 2020"
       }, pdf: "/assets/onepage/12.pdf", info: "supply/small-scale-wind" },

      { name: "Electricity imports", categoryId: 2, typeId: 2, pathwayStringIndex: 15, tooltips: {
         "1": "No electricity imports, other than for balancing",
         "2": "30 TWh/yr of electricity imported from Southern Europe",
         "3": "70 TWh/yr imported from UK 10% share of international desert solar project ",
         "4": "140 TWh/yr imported from UK 20% share of international desert solar project"
       }, pdf: "/assets/onepage/13.pdf", info: "supply/electricity-imports" },

      { name: "Land dedicated to bioenergy", categoryId: 2, typeId: 1, pathwayStringIndex: 17, tooltips: {
         "1": "Energy crops and food production similar to today",
         "2": "5% of land used for energy crops",
         "3": "10% of land used for energy crops",
         "4": "17% of land used for energy crops"
       }, pdf: "/assets/onepage/15.pdf", info: "supply/land-dedicated-to-bioenergy" },

      { name: "Livestock and their management", categoryId: 2, typeId: 1, pathwayStringIndex: 18, tooltips: {
         "1": "Livestock numbers increase by 10%",
         "2": "Livestock numbers same as today",
         "3": "Livestock numbers decrease by 10%",
         "4": "Livestock numbers decrease by 20%"
       }, pdf: "/assets/onepage/16.pdf", info: "supply/livestock-and-their-management" },

      { name: "Volume of waste and recycling", categoryId: 2, typeId: 3, value: 'A', pathwayStringIndex: 19, tooltips: {
         "1": "Quantity of waste increases 50%; Small increase in rates of recycling and EFW.",
         "2": "Quantity of waste increases 20%; Increase in rates of recycling and EFW.",
         "3": "Quantity of waste increases 33%; Significant increase in rates of recycling and EFW through innovation.",
         "4": "Quantity of waste decreases 20%; Significant increase in rate of recycling."
       }, pdf: "/assets/onepage/17.pdf", info: "supply/volume-of-waste-and-recycling"  },

      { name: "Marine algae", categoryId: 2, typeId: 1, pathwayStringIndex: 20, tooltips: {
         "1": "No development of macro-algae cultivation",
         "2": "Area same as half of natural reserve used, delivering ~4 TWh/yr",
         "3": "Area same as all of natural reserve used, delivering ~9 TWh/yr",
         "4": "Area same as four times natural reserve used, delivering ~46 TWh/yr"
         }, pdf: "/assets/onepage/18.pdf", info: "supply/marine-algae" },

      { name: "Type of fuels from biomass", categoryId: 2, typeId: 3, value: 'A', pathwayStringIndex: 21, tooltips: {
         "1": "Biomass converted to a mixture of solid, liquid and gas biofuels",
         "2": "Biomass mainly converted to solid biofuel",
         "3": "Biomass mainly converted to liquid biofuel",
         "4": "Biomass mainly converted to biogas fuel"
       }, pdf: "/assets/onepage/19.pdf", info: "supply/types-of-fuel-from-bioenergy" },

      { name: "Bioenergy imports", categoryId: 2, typeId: 1, pathwayStringIndex: 22, tooltips: {
         "1": "Imported biofuel declines from ~ 4 TWh/yr currently to zero",
         "2": "Up to 70 TWh/yr of imported bioenergy in 2050",
         "3": "Up to 140 TWh/yr of imported bioenergy in 2050",
         "4": "Up to 280 TWh/yr of imported bioenergy in 2050"
       }, pdf: "/assets/onepage/20.pdf", info: "supply/bioenergy-imports" },

      { name: "Geosequestration", categoryId: 3, typeId: 1, pathwayStringIndex: 50, tooltips: {
         "1": "No geosequestration",
         "2": "Carbon dioxide sequestration rate of 1 million tonnes per annum by 2050",
         "3": "Carbon dioxide sequestration rate of ~30 million tonnes per annum by 2050",
         "4": "Carbon dioxide sequestration rate of ~110 million tonnes per annum by 2050"
       }, pdf: "/assets/onepage/47.pdf", info: "emissions/geosequestration"  },

      { name: "Storage, demand shifting & interconnection", categoryId: 3, typeId: 1, pathwayStringIndex: 51, tooltips: {
         "1": "Today's 3.5 GW storage & 4 GW interconnection with Europe for balancing",
         "2": "4 GW storage & 10 GW interconnection with Europe for balancing",
         "3": "7 GW storage with 2 more pumped storage, 15 GW interconnection & some demand shifting",
         "4": "20 GW storage with large lagoons, 30 GW interconnection & substantial demand shifting"
       }, pdf: "/assets/onepage/48.pdf", info: "emissions/storage-demand-shifting-and-interconnection" }
    ],

    ACTION_CATEGORIES: [
      { "id": 1, "name": "Demand" },
      { "id": 2, "name": "Supply" },
      { "id": 3, "name": "Other" }
    ]
  }
});

