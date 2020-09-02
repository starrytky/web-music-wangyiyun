/*
 * @Descripttion : 
 * @version      : 
 * @Author       : tky
 * @Date         : 2020-09-01 22:21:54
 * @LastEditors  : tky
 * @LastEditTime : 2020-09-02 14:12:50
 */
import React from 'react';
import { Redirect } from 'react-router-dom';

const HYDiscover = React.lazy(_ => import("../pages/discover"));
// const HYRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
// const HYRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
// const HYSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
// const HYDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
// const HYArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
// const HYAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));
// const HYPlayer = React.lazy(_ => import("../pages/player"));


const HYFriend = React.lazy(_ => import("../pages/friend"));
const HYMine = React.lazy(_ => import("../pages/mine"));

export default [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    compontent: HYDiscover,
    // routes: [
    //   {
    //     path: '/discover',
    //     exact: true,
    //     render: () => (
    //       <Redirect to={"/discover/artist"}/>
    //     )
    //   },
    //   {
    //     path: "/discover/recommend",
    //     compontent: HYRecommend,
    //   },
    //   {
    //     path: "/discover/ranking",
    //     compontent: HYRanking
    //   },
    //   {
    //     path: "/discover/songs",
    //     compontent: HYSongs
    //   },
    //   {
    //     path: "/discover/djradio",
    //     compontent: HYDjradio
    //   },
    //   {
    //     path: "/discover/artist",
    //     compontent: HYArtist
    //   },
    //   {
    //     path: "/discover/album",
    //     compontent: HYAlbum
    //   },
    //   {
    //     path: "/discover/player",
    //     compontent: HYPlayer
    //   }
    // ]
  },
  {
    path: "/friend",
    compontent: HYFriend
  },
  {
    path: "/mine",
    compontent: HYMine
  }
]