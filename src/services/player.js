/*
 * @Descripttion : 
 * @version      : 
 * @Author       : tky
 * @Date         : 2020-09-05 11:53:21
 * @LastEditors  : tky
 * @LastEditTime : 2020-09-05 11:57:49
 */
import request from './axios';

// 通过id获取歌曲详情
export function getSongDetail(ids){
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

// 通过id获取歌词
export function getLyric(id){
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}

// 通过id获取simi播放列表
export function getSimiPlaylist(id){
  return request({
    url: "/simi/playlist",
    params: {
      id
    }
  })
}

export function getSimiSong(id) {
  return request({
    url: "/simi/song",
    params: {
      id
    }
  })
}
