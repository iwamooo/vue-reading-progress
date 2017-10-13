<template lang="pug">
  #app
    h1
      span Vue
      | &nbsp;&lt;ReadingProgress /&gt;
    p
      | From Wikipedia, the free encyclopedia
      br
      br
      | Example of a progress bar.
      br
      br
      | A simple animated progress bar.
      br
      | A progress bar is a graphical control element used to visualize the progression of an extended computer operation, such as a download, file transfer, or installation. Sometimes, the graphic is accompanied by a textual representation of the progress in a percent format.
      br
      br
      | A more recent development is the indeterminate progress bar, which is used in situations where the extent of the task is unknown or the progress of the task cannot be determined in a way that could be expressed as a percentage. This bar uses motion or some other indicator to show that progress is taking place, rather than using the size of the filled portion to show the total amount of progress, making it more like a throbber than a progress bar (see also barber's pole). There are also indeterminate progress indicators, which are not bar shaped.
      br
      br
      | The concept of a progress bar was invented before digital computing. In 1896 Karol Adamiecki developed a chart which he called a harmonogram, which is better known today as a Gantt chart. Adamiecki did not publish his chart until 1931, however, and then only in Polish. The chart thus now bears the name of Henry Gantt (1861–1919), who designed his chart around the years 1910-1915 and popularized it in the west.
      br
      br
      | The concept was later adopted in computing. The first graphical progress bar appeared in Mitchell L Model‘s 1979 Ph. D. thesis, Monitoring System Behavior in a Complex Computational Environment.[1] In 1985, Brad Allan Myers presented a paper on “percent-done progress indicators” at a conference on computer-human interactions.[2] Myers's research involved asking people to run database searches, some with a progress bar and some without. Those who waited whilst watching a progress bar described an overall more positive experience. Myers concluded that the use of a progress bar reduced anxiety and was more efficient.[3]
      br
      br
      | Typically, progress bars use a linear function, such that the advancement of a progress bar is directly proportional to the amount of work that has been completed. However, varying disk, memory, processor, bandwidth and other factors complicate this estimate. Consequently, progress bars often exhibit non-linear behaviors, such as acceleration, deceleration, and pauses. These behaviors, coupled with humans' non-linear perception of time passing, produces a variable perception of how long progress bars take to complete.[4] However, this also means progress bars can be designed to "feel" faster. Finally, the graphical design of progress bars has also been shown to influence humans' perception of duration.
      br
      br
      | From Wikipedia, the free encyclopedia
      br
      br
      | Example of a progress bar.
      br
      br
      | A simple animated progress bar.
      br
      | A progress bar is a graphical control element used to visualize the progression of an extended computer operation, such as a download, file transfer, or installation. Sometimes, the graphic is accompanied by a textual representation of the progress in a percent format.
      br
      br
      | A more recent development is the indeterminate progress bar, which is used in situations where the extent of the task is unknown or the progress of the task cannot be determined in a way that could be expressed as a percentage. This bar uses motion or some other indicator to show that progress is taking place, rather than using the size of the filled portion to show the total amount of progress, making it more like a throbber than a progress bar (see also barber's pole). There are also indeterminate progress indicators, which are not bar shaped.
      br
      br
      | The concept of a progress bar was invented before digital computing. In 1896 Karol Adamiecki developed a chart which he called a harmonogram, which is better known today as a Gantt chart. Adamiecki did not publish his chart until 1931, however, and then only in Polish. The chart thus now bears the name of Henry Gantt (1861–1919), who designed his chart around the years 1910-1915 and popularized it in the west.
      br
      br
      | The concept was later adopted in computing. The first graphical progress bar appeared in Mitchell L Model‘s 1979 Ph. D. thesis, Monitoring System Behavior in a Complex Computational Environment.[1] In 1985, Brad Allan Myers presented a paper on “percent-done progress indicators” at a conference on computer-human interactions.[2] Myers's research involved asking people to run database searches, some with a progress bar and some without. Those who waited whilst watching a progress bar described an overall more positive experience. Myers concluded that the use of a progress bar reduced anxiety and was more efficient.[3]
      br
      br
      | Typically, progress bars use a linear function, such that the advancement of a progress bar is directly proportional to the amount of work that has been completed. However, varying disk, memory, processor, bandwidth and other factors complicate this estimate. Consequently, progress bars often exhibit non-linear behaviors, such as acceleration, deceleration, and pauses. These behaviors, coupled with humans' non-linear perception of time passing, produces a variable perception of how long progress bars take to complete.[4] However, this also means progress bars can be designed to "feel" faster. Finally, the graphical design of progress bars has also been shown to influence humans' perception of duration.
      br
      br
      | From Wikipedia, the free encyclopedia
      br
      br
      | Example of a progress bar.
      br
      br
      | A simple animated progress bar.
      br
      | A progress bar is a graphical control element used to visualize the progression of an extended computer operation, such as a download, file transfer, or installation. Sometimes, the graphic is accompanied by a textual representation of the progress in a percent format.
      br
      br
      | A more recent development is the indeterminate progress bar, which is used in situations where the extent of the task is unknown or the progress of the task cannot be determined in a way that could be expressed as a percentage. This bar uses motion or some other indicator to show that progress is taking place, rather than using the size of the filled portion to show the total amount of progress, making it more like a throbber than a progress bar (see also barber's pole). There are also indeterminate progress indicators, which are not bar shaped.
      br
      br
      | The concept of a progress bar was invented before digital computing. In 1896 Karol Adamiecki developed a chart which he called a harmonogram, which is better known today as a Gantt chart. Adamiecki did not publish his chart until 1931, however, and then only in Polish. The chart thus now bears the name of Henry Gantt (1861–1919), who designed his chart around the years 1910-1915 and popularized it in the west.
      br
      br
      | The concept was later adopted in computing. The first graphical progress bar appeared in Mitchell L Model‘s 1979 Ph. D. thesis, Monitoring System Behavior in a Complex Computational Environment.[1] In 1985, Brad Allan Myers presented a paper on “percent-done progress indicators” at a conference on computer-human interactions.[2] Myers's research involved asking people to run database searches, some with a progress bar and some without. Those who waited whilst watching a progress bar described an overall more positive experience. Myers concluded that the use of a progress bar reduced anxiety and was more efficient.[3]
      br
      br
      | Typically, progress bars use a linear function, such that the advancement of a progress bar is directly proportional to the amount of work that has been completed. However, varying disk, memory, processor, bandwidth and other factors complicate this estimate. Consequently, progress bars often exhibit non-linear behaviors, such as acceleration, deceleration, and pauses. These behaviors, coupled with humans' non-linear perception of time passing, produces a variable perception of how long progress bars take to complete.[4] However, this also means progress bars can be designed to "feel" faster. Finally, the graphical design of progress bars has also been shown to influence humans' perception of duration.

    ReadingProgress
</template>

<script>
  import ReadingProgress from './components/ReadingProgress.vue'

  export default {
    components: {
      ReadingProgress
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  h1 {
    background-color: color(#fff a(80%));
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0;
    padding: 80px 0;
    position: -webkit-sticky;
    position: sticky;
    top: 8px;
    text-align: center;
  }

  span {
    font-weight: 700;
  }
</style>
