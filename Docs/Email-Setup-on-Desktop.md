# Setting up your email on desktop applications

In this guide we will walk you through setting up you email address on desktop applications.

First, open up your email application. Both Mac and Windows have built in applications you can use. For this guide, we used Outlook as an example.

Open up the app and click on add account. Continue reading for further instructions.

# Email configuration

## Automatic configuration

Automatic configuration can be used in iOS and OS X only: Open [this configuration link](https://box.infinityarc.net/mailinabox.mobileconfig) on your Mac desktop to easily set up mail (IMAP/SMTP), Contacts, and Calendar.

## Manual configuration

Manual configuration can look complicated, but by following these steps, it can be done in a matter of seconds.

Be sure to select **other** when prompted what type of account to add.

Use the following settings when you set up your email on your desktop or other device:

**Option** | **Value**
---------- | ----------
Protocol/Method | IMAP
Mail server | box.infinityarc.net
IMAP Port | 993
IMAP Security | SSL or TLS
SMTP Port | 465
SMTP Security | SSL or TLS
Username: | 	**Your whole email address.**
Password: | **Your mail password.**

![image.png](/.attachments/image-45013d57-d6f2-4a79-a10e-0050c1c0bf8f.png)

*Above is an example of the manual settings used for setting up a new account.*

##Exchange/ActiveSync settings

On Outlook 2007 or later and Windows 7 aor later, you may set up your mail as an Exchange or ActiveSync server. However, we’ve found this to be more buggy than using IMAP as described above. If you encounter any problems, please use the manual settings above.

**Option** | **Value**
---------- | ---------
**Server** |	box.infinityarc.net
**Options** |	Secure Connection

Your device should also provide a contacts list and calendar that syncs to this box when you use this method.


Once your account is added successfully, you are ready to send and receive emails.
-

