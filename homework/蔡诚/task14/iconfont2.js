;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-hd" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M654.802892 458.778868 373.910457 458.778868c-15.919575 0-28.091802 12.172227-28.091802 28.088732l0 196.626239c0 15.917528 12.173251 28.089755 28.091802 28.089755l280.892435 0c15.917528 0 28.089755-12.173251 28.089755-28.089755L682.892647 486.8676C682.892647 470.951095 670.719396 458.778868 654.802892 458.778868zM458.176652 655.403061 401.999189 655.403061l0-56.17644 56.177464 0L458.176652 655.403061zM458.176652 571.135842 401.999189 571.135842l0-56.180534 56.177464 0L458.176652 571.135842zM542.445918 655.403061l-56.180534 0 0-56.17644 56.180534 0L542.445918 655.403061zM542.445918 571.135842l-56.180534 0 0-56.180534 56.180534 0L542.445918 571.135842zM626.71109 655.403061l-56.17644 0 0-56.17644 56.17644 0L626.71109 655.403061zM626.71109 571.135842l-56.17644 0 0-56.180534 56.17644 0L626.71109 571.135842z"  ></path>' +
    '' +
    '<path d="M514.356163 42.047652c-259.548314 0-469.952348 210.404034-469.952348 469.952348 0 259.547291 210.404034 469.952348 469.952348 469.952348 259.547291 0 469.952348-210.405057 469.952348-469.952348C984.308511 252.451686 773.90243 42.047652 514.356163 42.047652zM739.07011 711.583594c0 30.898731-25.278733 56.177464-56.177464 56.177464L345.817632 767.761058c-30.897707 0-56.177464-25.278733-56.177464-56.177464L289.640168 374.508579c0-30.897707 25.279756-56.177464 56.177464-56.177464l56.180534 0 0 28.088732c0 15.919575 12.172227 28.088732 28.088732 28.088732 15.916505 0 28.088732-12.170181 28.088732-28.088732l0-28.088732 112.357997 0 0 28.088732c0 15.919575 12.173251 28.088732 28.088732 28.088732 15.918551 0 28.087709-12.170181 28.087709-28.088732l0-28.088732 56.180534 0c30.898731 0 56.177464 25.279756 56.177464 56.177464L739.068064 711.583594z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jineng" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M254.697618 64.562113h514.55357c98.845889 0 178.975155 80.129266 178.975155 178.975155v536.928536c0 98.843841-80.129266 178.973107-178.975155 178.973107h-514.55357c-98.845889 0-178.975155-80.129266-178.975155-178.973107V243.537268c0-98.845889 80.129266-178.975155 178.975155-178.975155z" fill="" ></path>' +
    '' +
    '<path d="M464.351449 784.668853c-72.652855 0-144.584894-5.03342-156.697458-65.073032-1.774393-8.678452-1.708865-19.900235-1.232758-28.551042-19.103652-16.962708-29.16435-36.336666-29.980386-57.757371-0.100341-2.85664-0.326619-4.691443-0.528325-6.109524-0.226279-2.018078-0.42696-3.930696-0.42696-5.975395-9.584591-14.787976-15.027565-35.211416-14.474667-55.692194 0.515014-18.615259 7.206105-30.22919 14.096853-38.69877-0.326619-5.873006 0.177132-11.952837 0.704433-17.90673 0.264162-3.328651 0.554946-6.660374 0.628666-9.779129 1.006479-47.768346 36.168749-85.207737 80.03302-85.207737l72.13784-0.130033c4.036156 0 7.984258 0 11.846354 0.026621-12.212904-46.985074-27.052074-104.94927-7.421121-139.951814 14.612891-26.139792 54.932472-26.139792 77.546003-26.139792 33.703233 0 42.708305 9.754555 51.220887 33.087878l2.277121 6.082903c47.135585 121.517782 109.161534 176.890524 146.851777 176.890524 10.172301 0 39.967364 14.470571 46.544803 25.77017 5.431712 9.098245 18.082839 37.962596 18.082838 109.754363 0 51.963204-20.75006 152.012159-49.097349 152.117619l-3.004079 0.024573c-3.924552 0-6.136145-0.077815-9.445343-0.130033l-1.834802 0.051194c-63.675428 4.510215-78.966132 9.832371-83.004336 13.10778-22.020702 17.908778-32.623034 20.188971-164.823011 20.188971z m241.831475-79.577391l1.859375 0.024573c7.340234-16.208105 21.911146-57.234166 21.911146-109.132865 0-55.504823-8.389716-78.156239-11.289359-84.397844-3.825236-2.718416-13.096517-7.574704-17.09479-8.910874-59.688419-1.382245-127.057002-76.738157-172.076215-192.819108l-2.438895-6.543651c-1.098629-3.020462-2.476779-6.743309-2.040604-6.794503-0.460748-0.201705-3.212952-1.234806-15.042923-1.234806-34.17934 0-41.483738 4.808165-43.005231 6.821124-11.565809 20.615931 2.584287 74.952501 11.033388 107.396356 2.150159 8.333403 4.154927 16.007423 5.69997 22.626842l5.239221 22.877694-22.575648-0.174061c-9.781177-0.102389-21.709441-0.124914-34.169101-0.124914l-69.250484 0.124914c-26.342522 0-41.047563 23.6067-41.517526 45.806582-0.084982 3.724895-0.411602 7.751836-0.738221 11.754203-0.362455 4.130353-0.953237 11.025197-0.651191 12.560001l4.538884 11.250452-8.136817 8.758315c-6.774025 7.272657-9.599949 10.295167-9.828275 19.609452-0.409554 15.660326 4.948438 29.049674 10.117011 34.837698l7.026925 8.431696-3.103397 10.219399c0.254947 2.114323 0.590782 4.857312 0.760747 9.111556 0.434127 11.525877 7.931016 22.85312 22.284864 33.649991l8.633401 6.519078-1.485657 10.972979c-0.915353 6.668565-1.400675 19.60638-0.228327 25.546963 4.044347 19.957573 25.280753 33.24658 115.888461 33.24658 122.250884 0 125.560081-2.691795 137.112579-12.054202 11.275025-9.163774 30.2896-15.027565 98.43224-19.808085a54.027357 54.027357 0 0 1 4.134449-0.151535z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)