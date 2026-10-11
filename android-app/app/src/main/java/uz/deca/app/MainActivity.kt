package uz.deca.app

import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import android.webkit.WebChromeClient
import androidx.activity.OnBackPressedCallback
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

private lateinit var webView: WebView

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    webView = WebView(this)
    setContentView(webView)

    webView.settings.javaScriptEnabled = true
    webView.settings.domStorageEnabled = true
    webView.webViewClient = WebViewClient()
    webView.webChromeClient = WebChromeClient()

    if (savedInstanceState == null) {
        webView.loadUrl("https://www.deca.uz")
    } else {
        webView.restoreState(savedInstanceState)
    }

    onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
        override fun handleOnBackPressed() {
            if (webView.canGoBack()) {
                webView.goBack()
            } else {
                finish()
            }
        }
    })
}

override fun onSaveInstanceState(outState: Bundle) {
    webView.saveState(outState)
    super.onSaveInstanceState(outState)
}

}
