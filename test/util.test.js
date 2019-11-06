 import { is_android } from '../src/main.js'
 describe('app test', ()=>{
    const ua = '"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"'

    describe('判断:getParamByName',()=>{
      test(`${ua} is_android('a',url)  返回 1`, ()=>{
        expect(is_android(ua)).toBe(false)
      })
    })
  })