https://linuxize.com/post/how-to-run-linux-commands-in-background/
nmap -sP 192.168.1.0/24 | grep -B 2 "00:11:32:XX:XX:XX" | head -n 1 | cut -d " " -f 5
{
  "data": {
    "Starting Nmap": " 7.80 ( https://Nmap.org ) at 2022-05-19 21:20 CEST",
    "Hosts": {
      "192.168.0.1": {
        "Nmap": " scan report for 192.168.0.1",
        "Host": " is up (0.15s latency).",
        "alias": null,
        "MAC_Address": " 10:62:D0:23:55:5C (Technicolor CH USA)"
      },
      "192.168.0.11": {
        "Nmap": " scan report for 192.168.0.11",
        "Host": " is up (0.37s latency).",
        "alias": null,
        "MAC_Address": " 2C:71:FF:FC:15:30 (Unknown)"
      },
      "192.168.0.13": {
        "Nmap": " scan report for 192.168.0.13",
        "Host": " is up (0.20s latency).",
        "alias": null,
        "MAC_Address": " 82:74:7D:D3:DD:47 (Unknown)"
      },
      "192.168.0.14": {
        "Nmap": " scan report for 192.168.0.14",
        "Host": " is up (0.28s latency).",
        "alias": null,
        "MAC_Address": " B0:10:41:CF:20:22 (Hon Hai Precision Ind.)"
      },
      "192.168.0.15": {
        "Nmap": " scan report for 192.168.0.15",
        "Host": " is up (0.25s latency).",
        "alias": null,
        "MAC_Address": " AC:67:84:3C:F3:DE (Google)"
      },
      "192.168.0.16": {
        "Nmap": " scan report for 192.168.0.16",
        "Host": " is up (0.13s latency).",
        "alias": null,
        "MAC_Address": " 2A:6C:07:4E:61:75 (Unknown)"
      },
      "192.168.0.17": {
        "Nmap": " scan report for 192.168.0.17",
        "Host": " is up (0.42s latency).","alias": null,
        "MAC_Address": " C0:8C:71:B4:CF:D2 (Motorola Mobility, a Lenovo Company)"
      },
      "192.168.0.18": {
        "Nmap": " scan report for 192.168.0.18",
        "Host": " is up (0.36s latency).",
        "alias": null,
        "MAC_Address": " DA:45:1C:44:0E:DD (Unknown)"
      },
      "192.168.0.19": {
        "Nmap": " scan report for 192.168.0.19",
        "Host": " is up (0.15s latency).","alias": null,
        "MAC_Address": " A4:38:CC:CF:70:F9 (Nintendo)"
      },
      "192.168.0.20": {
        "Nmap": " scan report for 192.168.0.20",
        "Host": " is up (0.15s latency).","alias": null,
        "MAC_Address": " C0:3C:04:E2:F6:4C (Unknown)"
      },
      "192.168.0.21": {
        "Nmap": " scan report for 192.168.0.21",
        "Host": " is up (0.033s latency).","alias": null,
        "MAC_Address": " BC:14:85:B7:5C:17 (Samsung Electronics)"
      },
      "192.168.0.22": {
        "Nmap": " scan report for 192.168.0.22",
        "Host": " is up (0.0061s latency).","alias": null,
        "MAC_Address": " 48:D2:4F:99:CE:FC (Sagemcom Broadband SAS)"
      },
      "192.168.0.24": {
        "Nmap": " scan report for 192.168.0.24",
        "Host": " is up (0.15s latency).","alias": null,
        "MAC_Address": " 22:08:5C:B5:F9:22 (Unknown)"
      },
      "192.168.0.26": {
        "Nmap": " scan report for 192.168.0.26",
        "Host": " is up (0.025s latency).","alias": null,
        "MAC_Address": " F4:F5:D8:EE:12:78 (Google)"
      },
      "192.168.0.27": {
        "Nmap": " scan report for 192.168.0.27",
        "Host": " is up (0.15s latency).","alias": null,
        "MAC_Address": " 2A:6C:07:4E:61:75 (Unknown)"
      },
      "192.168.0.254": {
        "Nmap": " scan report for 192.168.0.254",
        "Host": " is up (0.12s latency).","alias": null,
        "MAC_Address": " 10:62:D0:23:55:5E (Technicolor CH USA)"
      },
      "192.168.0.28": {
        "Nmap": " scan report for 192.168.0.28",
        "Host": " is up.","alias": null,
        "MAC_Address": null
      }
    },
    "Nmap done": "256 IP addresses (17 Host is up) scanned in 34.23 seconds"
  }
}

