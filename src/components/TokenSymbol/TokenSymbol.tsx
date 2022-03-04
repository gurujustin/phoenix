import React from 'react';

//Graveyard ecosystem logos
import tombLogo from '../../assets/img/phoenix.png';
import tShareLogo from '../../assets/img/xshare.png';
import tombLogoPNG from '../../assets/img/phoenix.png';
import tShareLogoPNG from '../../assets/img/xshare.png';
import tBondLogo from '../../assets/img/xbond.png';
import tombAvaxLpLogo from '../../assets/img/PHOENIX-WAVAX.png';
import tshareAvaxLpLogo from '../../assets/img/XSHARES-WAVAX.png';

import WAVAXLogo from '../../assets/img/avax.png';
import wethLogo from '../../assets/img/weth.png';
import rtombLogo from '../../assets/img/crypto_tomb_cash.svg';
import mimLogo from '../../assets/img/mimlogo.png';

import tombtshares from '../../assets/img/PHOENIX-XSHARES.png';

import usdc from '../../assets/img/USDC.png';

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  TOMB: tombLogo,
  TOMBPNG: tombLogoPNG,
  TSHAREPNG: tShareLogoPNG,
  TSHARE: tShareLogo,
  TBOND: tBondLogo,
  XBOND: tBondLogo,
  WAVAX: WAVAXLogo,
  WETH: wethLogo,
  MIM: mimLogo,
  // RTOMB: rtombLogo,
  'PHOENIX-AVAX-LP': tombAvaxLpLogo,
  'XSHARE-AVAX-LP': tshareAvaxLpLogo,
  'PHOENIX-XSHARE-LP': tombtshares,
  'USDC': usdc,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, size = 64 }) => {
  if (!logosBySymbol[symbol]) {
    return <img src={logosBySymbol["TOMB"]} alt={`Tomb Logo`} width={size} height={size} />;
    // throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={size} height={size} />;
};

export default TokenSymbol;
