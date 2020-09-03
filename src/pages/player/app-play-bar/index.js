/*
 * @Descripttion : 
 * @version      : 
 * @Author       : tky
 * @Date         : 2020-09-02 20:20:02
 * @LastEditors  : tky
 * @LastEditTime : 2020-09-03 10:18:32
 */
import React, {memo, useRef, useEffect, useState, useCallback} from 'react';
import { useSelector, shallowEqual, useDispatch} from 'react-redux';

import { message } from 'antd'

import { getPlayUrl, formatMinuteSecond } from '@/utils/format-utils'

import {
  getSongDetailAction,
  changeCurrentLyricIndexAction,
  changePlaySequenceAction,
  changePlaySongAction
} from '../store/actionCreators'

import HYAppPlayPanel from '../app-play-panel'