jQuery("#simulation")
  .on("click", ".s-235b87af-8541-4c3c-a3f0-3b1a97e601ed .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/182a3b6b-d8d5-4bd0-8667-45ab6de9ae29",
                    "transition": {
                      "type": "slidedown",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3b1e6b01-65d3-478f-8fa5-dc1390d38a00",
                    "transition": {
                      "type": "slidedown",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
                    "transition": {
                      "type": "slidedown",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cba81688-2567-40c2-aa15-6c31404cdc9c",
                    "transition": {
                      "type": "slidedown",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/aa075386-aeb2-445f-a045-8e636c59ec86",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Button_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Button_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Button_4 span": {
                      "attributes": {
                        "color": "#851DE6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Button_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Button_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#851DE6"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Button_3 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Button_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Button_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Button_3 span": {
                      "attributes": {
                        "color": "#851DE6"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Button_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Button_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#851DE6"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Button_4 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d41efd49-7dda-4f70-a968-e2fb77ed9b60",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_10 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#000000",
                        "border-right-color": "#000000",
                        "border-bottom-color": "#000000",
                        "border-left-color": "#000000"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_11 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_12 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_11 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#000000",
                        "border-right-color": "#000000",
                        "border-bottom-color": "#000000",
                        "border-left-color": "#000000"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_10 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_12 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_12 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#000000",
                        "border-right-color": "#000000",
                        "border-bottom-color": "#000000",
                        "border-left-color": "#000000"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_11 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_10 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_14 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_14 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#000000",
                        "border-right-color": "#000000",
                        "border-bottom-color": "#000000",
                        "border-left-color": "#000000"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_15 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_15 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_16 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_16 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_15 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_15 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#000000",
                        "border-right-color": "#000000",
                        "border-bottom-color": "#000000",
                        "border-left-color": "#000000"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_14 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_14 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_16 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_16 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_16 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_16 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#000000",
                        "border-right-color": "#000000",
                        "border-bottom-color": "#000000",
                        "border-left-color": "#000000"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_15 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_15 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_14 svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-235b87af-8541-4c3c-a3f0-3b1a97e601ed #s-Image_14 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#FFFFFF",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });