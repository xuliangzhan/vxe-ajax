# VXEAjax 用于Vue全局安装xe-ajax

## 通过NPM安装最新版本

``` shell
npm install vxe-ajax --save
```

### 通过 Vue.use() 来全局安装
``` shell
import Vue from 'vue'
import XEAjax from 'xe-ajax'
import VXEAjax from 'vxe-ajax'

Vue.use(VXEAjax, XEAjax)

// 通过vue实例的调用方式
this.$ajax.doGet('services/user/list', {id: 1})
this.$ajax.getJSON ('services/user/list', {id: 1})
this.$ajax.doPost ('services/user/save', {id: 1})
this.$ajax.postJSON ('services/user/save', {id: 1})
```

## License
Copyright (c) 2017-present, Xu Liangzhan