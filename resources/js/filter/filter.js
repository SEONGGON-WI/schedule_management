import Vue from "vue";
import moment from 'moment'
import store from '../store/index'
import Const from "../const.js"

export function formatDate(value) {
  // const settings = store.getters.settings
  // const sample =  Const.SAMPLE
  if (value) {
    return moment(String(value)).format('YYYY/MM/DD HH:mm')
  } else {
    return ''
  }
}
