<template>
    <div>
        <div class="btn-close">
            <button on:click>Go Back</button>
        </div>
        <video onloadstart="this.volume=0.3" controls autoplay>
        <source :src="src" type="video/mp4">
        Your browser does not support HTML5 video.
        </video>
    </div>
</template>
<script>
export default {
    props: ['src']
}
</script>
<style scoped>
video{
        max-width: 100%;
    }
    .btn-close{
        position: absolute;
        z-index: 2;
    }
    button{
        background: #2D2D61;
        color: white;
        cursor: pointer;
        border:0;
    }
    button:hover{
        background: rgb(55, 55, 122)
    }
</style>