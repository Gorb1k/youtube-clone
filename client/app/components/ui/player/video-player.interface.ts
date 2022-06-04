export interface IVideoElement extends HTMLVideoElement{
    msRequestFullscreen?: () => void //Полный экран для разных браузеров
    mozRequestFullscreen?: () => void
    webkitRequestFullscreen?: () => void
}