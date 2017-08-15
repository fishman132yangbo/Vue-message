
<template>
    <section class="messagebox-container">
        <div class="messagebox" v-bind:class="[visible?'fade-in':'fade-out']">
            <h2>{{message.title}}</h2>
            <p class="describe">{{message.describe}}</p>
            <p v-bind:class="[message.showButton?'show':'hide']">
                <span class="cancle" v-bind:style="{color:options.buttonColor[0],background:options.buttonBgcolor[0]}" v-text="options.buttonName[0]" @click="cancle"></span>
                <span class="sure" v-bind:style="{color:options.buttonColor[1],background:options.buttonBgcolor[1]}" v-text="options.buttonName[1]" @click="sure" v-if="options.buttonName.length>=2"></span>
            </p>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                message:{
                    title:'',
                    describe:'',
                    showButton:''
                },
                options:{
                    buttonName:[],
                    buttonColor:[],
                    buttonBgcolor:[],
                    bgColor:'',
                    cb:function () {

                    }
                },
                visible:false,
            }
        },
        methods:{
            cancle(){
                this.$messagebox['cancle']();
            },
            sure(){
                this.$messagebox['sure']();
            }
        }

    }
</script>

&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;
<style scoped lang="scss">
    @keyframes fade-in{
        0% {
            opacity: 0;
            transform:scale(0.7);
        }
        100% {
            opacity: 1;
            transform:scale(1);
        }
    }
    @keyframes fade-out{
        0% {
            opacity: 1;
            transform:scale(1);
        }
        100% {
            opacity: 0;
            transform:scale(0.7);
        }
    }
    .messagebox-container{
        position: absolute;
        left: 0;
        top:0;
        bottom: 0;
        right: 0;
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.61);
        .messagebox{
            width: 400px;
            text-align: center;
            background: #fff;
            border-radius: 4px;
            color: #333;
            padding: 20px;
            min-height: 130px;
            h2{
                font-weight: 700;
                font-size: 18px;
                text-align: left;
            }
            p,h2{
                padding: 0;
                margin: 0;
            }
            .describe{
                text-align: left;
                padding: 20px 0 30px;
                font-size: 14px;
            }
            .show{
                display: block;
            }
            .hide{
                display: none;
            }
            p>span{
                display: inline-block;
                width: 60px;
                height: 36px;
                text-align: center;
                line-height: 36px;
                border-radius: 4px;
                margin: 0 10px;
                cursor: pointer;
                &:hover{
                    opacity: .8;
                }
            }

        }
        .fade-in{
            animation-name: fade-in;
            animation-duration:0.3s;
            animation-fill-mode: both;
        }
        .fade-out{
            animation-name: fade-out;
            animation-duration:0.3s;
            animation-fill-mode: both;
        }
    }
</style>



