<template>
    <div>
        <Upload @img="img" />
        <div class="edit_container">
        	<quill-editor 
                ref="myQuillEditor"
                class="editer"
                v-model="content"
                :options="editorOption"
                @ready="onEditorReady($event)"
                @change="onEditorChange($event)"
                >
  			</quill-editor>
        </div>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'    
    import { quillEditor } from 'vue-quill-editor'
    import store from "../store"
    import Vue from 'vue'  
    import VueQuillEditor from 'vue-quill-editor'
    import { createNamespacedHelpers } from 'vuex'

    import {toolbarOptions} from "./toolbar.js"
    import Upload from "./Upload1"
    Vue.use(VueQuillEditor)

    const { mapState,mapGetters,mapActions,mapMutations } = createNamespacedHelpers('products')
    export default {
        data(){
            const imghandler=(x)=>document.querySelector('.avatar-uploader input').click()
            const handlers={ "image":imghandler, }
            return {
			    editorOption: {modules:{toolbar:{ container: toolbarOptions, handlers, }} },
                content:"",
            }
        },
    	components: { quillEditor,Upload },
        computed: {
            ...mapState({ content1:s=>s.product_detail.content}),
          	editor() { return this.$refs.myQuillEditor.quill }
        },
        watch:{ content1:function(n){ this.content=n; } },
        methods: {
            ...mapMutations(['set_product_detail']),  
            onEditorReady (){ },
            onEditorChange({html}){ 
                let d={content:html};
                this.set_product_detail(d) 
            },
            img(e){
                let quill = this.$refs.myQuillEditor.quill
                let length = quill.getSelection().index;
                quill.insertEmbed(length, 'image', e)
                quill.setSelection(length + 1)                
            }
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.edit_container{ padding: 4rem 0; }
	.editer{ height: 100vh; }
</style>
