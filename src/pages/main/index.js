/*
 * @Descripttion : 
 * @version      : 
 * @Author       : tky
 * @Date         : 2020-09-01 22:19:51
 * @LastEditors  : tky
 * @LastEditTime : 2020-09-02 21:38:39
 */
import React, {memo, Suspense} from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '@/router';

import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';
import HYAppPlayBar from '@/pages/player/app-play-bar'


export default memo(function HYMain(){
  return (
    <HashRouter>
          <HYAppHeader></HYAppHeader>
          <HYAppFooter></HYAppFooter>
    </HashRouter>
  )
})