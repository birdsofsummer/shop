import { VuexModule, Module, MutationAction, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import {api} from "@/fetch"


@Module({ dynamic: true, store, name: 'dash' })
class Cf extends VuexModule {
  public result={}
  @MutationAction({ mutate: ['result'] })
  public async List() {
      let r= await api.dash()
      this.result=r.result
      return r
  }
}

export const CfModule = getModule(Cf)

