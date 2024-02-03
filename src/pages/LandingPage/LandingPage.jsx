import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Dashboard } from '../../design-system';
import { DashboardConfiguration } from '../../constants';
import pokemonIcon from './../../assets/pokeball-pokemon-svgrepo-com.svg';
import pokemonListIcon from './../../assets/pointer.png';
import pokemon1 from './../../assets/pikachu.png';
import pokemon2 from './../../assets/bullbasaur.png';
import pokemon3 from './../../assets/eevee.png';
import pokemon4 from './../../assets/jigglypuff.png';
import pokemon5 from './../../assets/squirtle.png';
import pokemon6 from './../../assets/pidgey.png';
import pokemon7 from './../../assets/avatar.png';
import errorIcon from './../../assets/icons8-error-100.png';
import { Loading } from '../../components/Loading';
import { Request } from '../../utils';

export const LandingPage = () => {
  const client = 'pokemon';
  const [processedConfiguration, setProcessedConfiguration] = useState({});
  const [isDataProcessed, setIsDataProcessed] = useState(false);

  const ClientHeadingIcon = useMemo(() => {
    return {
      pokemon: pokemonIcon,
    };
  }, []);

  const getRandomImage = useCallback(() => {
    const images = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6, pokemon7];
    const randomIndex = Math.floor(Math.random() * images.length);

    return images[randomIndex];
  }, []);

  useEffect(() => {
    const processConfiguration = async() => {
      try {
        let configCopy = JSON.parse(JSON.stringify(DashboardConfiguration[client]));
        for (const conf of configCopy.columns) {

          conf.icon = ClientHeadingIcon[client];
          for (const widget of conf.widgets) {
            const getWidgetApiResponse = await Request(widget.api);

            const WidgetGetter = {
              list: getWidgetApiResponse?.results,
              number: getWidgetApiResponse?.pokemon_species_details?.length,
            };
            const ClientWidgetIcon = {
              pokemon: {
                list: pokemonListIcon,
                number: getRandomImage(),
              },
            };
            delete widget.api;
            widget.data = WidgetGetter[widget.type];
            widget.icon = ClientWidgetIcon[client][widget.type];
          }
        }

        setProcessedConfiguration(configCopy);

        configCopy = null;
      } catch (err) {
        console.log('~ processConfiguration ~ err:', err);
      } finally {
        setIsDataProcessed(true);
      }
    };

    // Pre-process configuration
    processConfiguration();
  }, []);
  const displayDashboard = useMemo(() => {
    if (isDataProcessed && Object.keys(processedConfiguration).length > 0) {
      return <Dashboard configuration={processedConfiguration} />;
    } else if(isDataProcessed) {
      return <h1 className='text-3xl text-black h-screen grid items-center text-center'>

        <span className='flex justify-center items-center'> <img src={errorIcon} style={{ width:'80px', height: 'auto' }}></img> Please try again later ...</span>
        </h1>;
    }
  }, [processedConfiguration, isDataProcessed]);

  const displayLoading = useMemo(() => {
    if (!isDataProcessed) {
      return <Loading></Loading>;
    }
  }, [isDataProcessed]);

  return (
    <main id="landing-page" data-testid="landing-page">
      {displayDashboard}
      {displayLoading}
    </main>
  );
};
