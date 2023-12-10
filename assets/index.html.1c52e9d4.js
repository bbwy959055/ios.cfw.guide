import{_ as r}from"./checkra1n.ace0089d.js";import{_ as c,r as l,o as u,c as d,a as e,b as t,d as o,w as s,e as n}from"./app.9367282d.js";const h={},p={class:"custom-container danger"},y=e("p",{class:"custom-container-title"},"DANGER",-1),g=n('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.</p></div><h2 id="downloads-linux" tabindex="-1"><a class="header-anchor" href="#downloads-linux" aria-hidden="true">#</a> Downloads (Linux)</h2>',3),f={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[e("img",{src:r,alt:"A screenshot of the checkra1n application"})],-1),b=e("h2",{id:"installing-checkra1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-checkra1n","aria-hidden":"true"},"#"),t(" Installing checkra1n")],-1),w=n("<li>Open the <code>pongoOS.zip</code> file, navigate to <code>PongoConsolidated.bin</code>, then extract it. <ul><li>Keep note of where you extract this</li></ul></li><li>Run the <code>checkra1n</code> binary in CLI mode using this custom pongoOS in the terminal using <code>sudo checkra1n -c -k [path to PongoConsolidated.bin]</code></li><li>Plug your iOS device into your computer</li>",3),k=e("code",null,"Start",-1),x=e("ul",null,[e("li",null,"Follow the instructions until your device shows a black screen")],-1),v=e("li",null,"After this, checkra1n should automatically install",-1),S=n('<p>Your iOS device should now reboot.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>While you could, at this stage, install Cydia instead of continuing with the Odysseyra1n steps, we don&#39;t recommend it because of the fact that:</p><ul><li>People generally tend to have more stability when using Odysseyra1n instead of installing Cydia</li><li>Certain ease-of-use functionality (such as shshd, which automatically saves blobs for you when jailbroken) is not available</li><li>Some tweaks may require or be better tested with software that Odysseyra1n utilizes, rather than the software that is used when you choose to install Cydia</li></ul></div><p>To install Odysseyra1n, <u>do not</u> open the checkra1n app and install Cydia. Instead, follow the following instructions to install Sileo.</p><h2 id="the-odysseyra1n-script" tabindex="-1"><a class="header-anchor" href="#the-odysseyra1n-script" aria-hidden="true">#</a> The Odysseyra1n script</h2>',4),q={class:"custom-container tip"},I=e("p",{class:"custom-container-title"},"TIP",-1),O={href:"https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771",target:"_blank",rel:"noopener noreferrer"},C=n("<ol><li>Open the terminal app on your computer</li><li>Ensure that your computer is trusted by your device</li><li>Install &quot;iproxy&quot; by pasting and executing the following command: <ul><li>Ubuntu/Debian: <code>sudo apt install libusbmuxd-tools</code></li><li>Arch Linux: <code>pacman -S libusbmuxd</code></li></ul></li><li>Install the Odysseyra1n script by pasting and executing the following command: <code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)&quot;</code></li></ol>",1),T=n('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3);function U(A,B){const i=l("router-link"),a=l("ExternalLinkIcon");return u(),d("div",null,[e("div",p,[y,e("p",null,[t("If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc.) this guide will not work, and you should follow "),o(i,{to:"/using-odysseyn1x"},{default:s(()=>[t("Using Odysseyn1x")]),_:1}),t(" instead.")])]),g,e("ul",null,[e("li",null,[t("The latest release of "),e("a",f,[t("checkra1n"),o(a)])]),e("li",null,[t("The custom version of "),e("a",m,[t("pongoOS"),o(a)])])]),_,b,e("ol",null,[w,e("li",null,[t("You will now be presented with instructions in how to reboot your device into "),o(i,{to:"/faq/#what-is-dfu-mode"},{default:s(()=>[t("DFU mode")]),_:1}),t(", click "),k,t(" to begin "),x]),v]),S,e("div",q,[I,e("p",null,[t("If you would prefer to do so, instead of running the script on your computer, you can run the Odysseyra1n script using the "),e("a",O,[t("shortcut"),o(a)]),t(" by opening this page on your device and then clicking the shortcut hyperlink.")])]),C,e("p",null,[t("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),o(i,{to:"/faq/#what-are-tweaks"},{default:s(()=>[t("tweaks")]),_:1}),t(", themes, packages and more.")]),T])}var N=c(h,[["render",U],["__file","index.html.vue"]]);export{N as default};
