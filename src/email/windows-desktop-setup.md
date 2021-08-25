---
title: 4. Email on Windows
---

# Windows Setup

In this guide we will walk you through setting up you email address on email client applications like [Microsoft Outlook](https://www.microsoft.com/en-za/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook) and [Thuderbird](https://download.mozilla.org/?product=thunderbird-91.0-SSL&os=osx&lang=en-GB).

- ### Step 1

On your email client app add the feature to add a new account and select it.

- ### Step 2

This should then prompt you for a username or account name, the account name is what your device will use to reference the email account so you may choose anything in this input.

Following this please enter your username which is your email address and as well as your secret password.

> Note: Some devices may do automatic configuration at this point, if it is the case you will be prompted that your email account setup is complete and you may start sending and receiving email using your domain email hosted with Infinity Arc.

> Note: If the setup is completed, do not continue to step 3, your device setup is now completed

- ### Step 3

If the auto config did not appear you will now be faced with a form to configure access to the Infinity Arc email server.

Use the following settings when you set up your email on your desktop or other device:

Option | Value
---------- | ----------
Protocol/Method | IMAP
Mail server | box.infinityarc.net
IMAP Port | 993
IMAP Security | SSL or TLS
SMTP Port | 465
SMTP Security | SSL or TLS
Username: | youremail@yourdomain.tld
Password: | *****************

![image.png](/image-45013d57-d6f2-4a79-a10e-0050c1c0bf8f.png)

*Above is an example of the manual settings used for setting up a new account.*

## Exchange / ActiveSync settings

On Outlook 2007 or later and Windows 7 aor later, you may set up your mail as an Exchange or ActiveSync server. However, we’ve found this to be more buggy than using IMAP as described above. If you encounter any problems, please use the manual settings above.

**Option** | **Value**
---------- | ---------
**Server** |	box.infinityarc.net
**Options** |	Secure Connection

Your device should also provide a contacts list and calendar that syncs to this box when you use this method.

**Once your account is added successfully, you are ready to send and receive emails.**


