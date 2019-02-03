const address_rules={
          name: [
            { required: true, message: '必须填写收件人', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          mobile: [
            { required: true, message: '必须填写手机号', trigger: 'blur' },
            { min: 7, max: 155, message: '长度大于7个字', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '必须填写收件地址', trigger: 'blur' },
            { min: 7, max: 155, message: '大于7个字', trigger: 'blur' }
          ],

}
const product_rules={
              name: [ { required: true, message: '请输入名称', trigger: 'blur' }, ],
              dns: [ { required: true, message: '请输入dns', trigger: 'blur' }, ],
              price_1: [ { required: true, message: '请输入吊牌价', trigger: 'blur' }, ],
              price_2: [ { required: true, message: '请输入秒杀价', trigger: 'blur' }, ],
              currency: [ { required: true, message: '请输入单位', trigger: 'blur' }, ],
              volume: [ { required: true, message: '请输入库存', trigger: 'blur' }, ],
              sales_volume: [ { required: true, message: '请输入销量', trigger: 'blur' }, ],
}
export {address_rules,product_rules}
