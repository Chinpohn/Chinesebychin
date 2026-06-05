window.GRAMMAR_APP_DATA = {
  "units": [
    {
      "id": 1,
      "title": "基本语序 SVO",
      "thaiTitle": "โครงสร้างประโยคพื้นฐาน SVO",
      "formula": "主语 + 谓语 + 宾语",
      "thai": "ประธาน + กริยา + กรรม",
      "thaiExplanation": "ประโยคจีนพื้นฐานมักเรียงว่า ใคร + ทำอะไร + อะไร เหมือนแกนหลักของประโยคไทยหลายประโยค จึงควรจำรูปนี้ให้แม่นก่อนเรียนโครงสร้างอื่น",
      "tip": "中文基本句子常按“谁 + 做什么 + 什么”排列。",
      "examples": [
        {
          "zh": "我吃苹果。",
          "pinyin": "Wǒ chī píngguǒ.",
          "thai": "ฉันกินแอปเปิล",
          "tone": "Wo3 chi1 pingguo3."
        },
        {
          "zh": "他学中文。",
          "pinyin": "Tā xué Zhōngwén.",
          "thai": "เขาเรียนภาษาจีน",
          "tone": "Ta1 xue2 Zhongwen2."
        }
      ],
      "words": [
        "我",
        "你",
        "他",
        "吃",
        "喝",
        "学",
        "苹果",
        "中文"
      ],
      "vocab": [
        {
          "word": "我",
          "pinyin": "wǒ",
          "tone": "wo3",
          "thai": "ฉัน"
        },
        {
          "word": "你",
          "pinyin": "nǐ",
          "tone": "ni3",
          "thai": "คุณ"
        },
        {
          "word": "他",
          "pinyin": "tā",
          "tone": "ta1",
          "thai": "เขา"
        },
        {
          "word": "吃",
          "pinyin": "chī",
          "tone": "chi1",
          "thai": "กิน"
        },
        {
          "word": "喝",
          "pinyin": "hē",
          "tone": "he1",
          "thai": "ดื่ม"
        },
        {
          "word": "学",
          "pinyin": "xué",
          "tone": "xue2",
          "thai": "เรียน"
        },
        {
          "word": "苹果",
          "pinyin": "píngguǒ",
          "tone": "pingguo3",
          "thai": "แอปเปิล"
        },
        {
          "word": "中文",
          "pinyin": "Zhōngwén",
          "tone": "Zhongwen2",
          "thai": "ภาษาจีน"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 我 (wǒ) แปลว่าอะไร?",
              "answer": "ฉัน",
              "mode": "choice",
              "options": [
                "คุณ",
                "กิน",
                "ฉัน",
                "เขา"
              ]
            },
            {
              "prompt": "คำว่า 你 (nǐ) แปลว่าอะไร?",
              "answer": "คุณ",
              "mode": "choice",
              "options": [
                "ฉัน",
                "กิน",
                "คุณ",
                "เขา"
              ]
            },
            {
              "prompt": "คำว่า 他 (tā) แปลว่าอะไร?",
              "answer": "เขา",
              "mode": "choice",
              "options": [
                "ฉัน",
                "กิน",
                "เขา",
                "คุณ"
              ]
            },
            {
              "prompt": "คำว่า 吃 (chī) แปลว่าอะไร?",
              "answer": "กิน",
              "mode": "choice",
              "options": [
                "ฉัน",
                "เขา",
                "กิน",
                "คุณ"
              ]
            },
            {
              "prompt": "คำไทย “ฉัน” ตรงกับคำจีนข้อใด?",
              "answer": "我",
              "mode": "choice",
              "options": [
                "你",
                "吃",
                "我",
                "他"
              ]
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันกินข้าว",
              "answer": "我吃饭。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขาดื่มน้ำ",
              "answer": "他喝水。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: คุณเรียนภาษาจีน",
              "answer": "你学中文。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันกินข้าว (4)",
              "answer": "我吃饭。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขาดื่มน้ำ (5)",
              "answer": "他喝水。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันกินแอปเปิล",
              "answer": "我吃苹果。",
              "mode": "exact"
            },
            {
              "prompt": "เขาเรียนภาษาจีน",
              "answer": "他学中文。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันกินแอปเปิล (3)",
              "answer": "我吃苹果。",
              "mode": "exact"
            },
            {
              "prompt": "เขาเรียนภาษาจีน (4)",
              "answer": "他学中文。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันกินแอปเปิล (5)",
              "answer": "我吃苹果。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ chī píngguǒ.",
              "answer": "我吃苹果。",
              "mode": "exact"
            },
            {
              "prompt": "Tā xué Zhōngwén.",
              "answer": "他学中文。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ chī píngguǒ. (3)",
              "answer": "我吃苹果。",
              "mode": "exact"
            },
            {
              "prompt": "Tā xué Zhōngwén. (4)",
              "answer": "他学中文。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ chī píngguǒ. (5)",
              "answer": "我吃苹果。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 我",
              "answer": "我",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 你",
              "answer": "你",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 他",
              "answer": "他",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 我 (4)",
              "answer": "我",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 你 (5)",
              "answer": "你",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 我",
              "answer": "答案示例：我吃苹果。",
              "required": [
                "我"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 你",
              "answer": "答案示例：他学中文。",
              "required": [
                "你"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 他",
              "answer": "答案示例：我吃苹果。",
              "required": [
                "他"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 吃",
              "answer": "答案示例：他学中文。",
              "required": [
                "吃"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 喝",
              "answer": "答案示例：我吃苹果。",
              "required": [
                "喝"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我吃苹果。",
          "tokens": [
            "苹果",
            "我",
            "吃"
          ]
        },
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他学中文。",
          "tokens": [
            "学",
            "中文",
            "他"
          ]
        },
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "你喝水。",
          "tokens": [
            "你",
            "水",
            "喝"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我吃饭。",
          "tokens": [
            "吃",
            "我",
            "饭"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他喝水。",
          "tokens": [
            "喝",
            "他",
            "水"
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "形容词 + 的 + 名词",
      "thaiTitle": "คำคุณศัพท์ + 的 + คำนาม",
      "formula": "形容词 + 的 + 名词",
      "thai": "คำคุณศัพท์ + 的 + คำนาม",
      "thaiExplanation": "เมื่อคำคุณศัพท์ไปขยายคำนาม ให้วางคำคุณศัพท์ไว้หน้าคำนาม และมักใช้ 的 เชื่อม เช่น สีเขียว + 的 + หมี",
      "tip": "修饰名词时，形容词一般放在名词前，常用“的”连接。",
      "examples": [
        {
          "zh": "绿色的熊",
          "pinyin": "lǜsè de xióng",
          "thai": "หมีสีเขียว",
          "tone": "lvse4 de xiong2"
        },
        {
          "zh": "漂亮的书包",
          "pinyin": "piàoliang de shūbāo",
          "thai": "กระเป๋าสวย",
          "tone": "piaoliang4 de shubao1"
        }
      ],
      "words": [
        "的",
        "大",
        "小",
        "新",
        "旧",
        "绿色",
        "漂亮",
        "熊"
      ],
      "vocab": [
        {
          "word": "的",
          "pinyin": "de",
          "tone": "de",
          "thai": "ของ / ที่ใช้ขยายนาม"
        },
        {
          "word": "大",
          "pinyin": "dà",
          "tone": "da4",
          "thai": "ใหญ่"
        },
        {
          "word": "小",
          "pinyin": "xiǎo",
          "tone": "xiao3",
          "thai": "เล็ก"
        },
        {
          "word": "新",
          "pinyin": "xīn",
          "tone": "xin1",
          "thai": "ใหม่"
        },
        {
          "word": "旧",
          "pinyin": "jiù",
          "tone": "jiu4",
          "thai": "เก่า"
        },
        {
          "word": "绿色",
          "pinyin": "lǜsè",
          "tone": "lvse4",
          "thai": "สีเขียว"
        },
        {
          "word": "漂亮",
          "pinyin": "piàoliang",
          "tone": "piaoliang4",
          "thai": "สวย"
        },
        {
          "word": "熊",
          "pinyin": "xióng",
          "tone": "xiong2",
          "thai": "หมี"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 的 (de) แปลว่าอะไร?",
              "answer": "ของ / ที่ใช้ขยายนาม",
              "mode": "choice",
              "options": [
                "ใหญ่",
                "ใหม่",
                "ของ / ที่ใช้ขยายนาม",
                "เล็ก"
              ]
            },
            {
              "prompt": "คำว่า 大 (dà) แปลว่าอะไร?",
              "answer": "ใหญ่",
              "mode": "choice",
              "options": [
                "ของ / ที่ใช้ขยายนาม",
                "ใหม่",
                "ใหญ่",
                "เล็ก"
              ]
            },
            {
              "prompt": "คำว่า 小 (xiǎo) แปลว่าอะไร?",
              "answer": "เล็ก",
              "mode": "choice",
              "options": [
                "ของ / ที่ใช้ขยายนาม",
                "ใหม่",
                "เล็ก",
                "ใหญ่"
              ]
            },
            {
              "prompt": "คำว่า 新 (xīn) แปลว่าอะไร?",
              "answer": "ใหม่",
              "mode": "choice",
              "options": [
                "ของ / ที่ใช้ขยายนาม",
                "เล็ก",
                "ใหม่",
                "ใหญ่"
              ]
            },
            {
              "prompt": "คำไทย “ของ / ที่ใช้ขยายนาม” ตรงกับคำจีนข้อใด?",
              "answer": "的",
              "mode": "choice",
              "options": [
                "大",
                "新",
                "的",
                "小"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 绿色 __ 熊",
              "answer": "绿色的熊",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 漂亮 __ 书包",
              "answer": "漂亮的书包",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 大 __ 房子",
              "answer": "大的房子",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 绿色 __ 熊 (4)",
              "answer": "绿色的熊",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 漂亮 __ 书包 (5)",
              "answer": "漂亮的书包",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "เขียนใหม่ตามโจทย์",
          "prompts": [
            {
              "prompt": "เขียนใหม่ตามโจทย์: 书很新 -> ______书",
              "answer": "新的书",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 熊很可爱 -> ______熊",
              "answer": "可爱的熊",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 书很新 -> ______书 (3)",
              "answer": "新的书",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 熊很可爱 -> ______熊 (4)",
              "answer": "可爱的熊",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 书很新 -> ______书 (5)",
              "answer": "新的书",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "หมีสีเขียว",
              "answer": "绿色的熊",
              "mode": "exact"
            },
            {
              "prompt": "กระเป๋าสวย",
              "answer": "漂亮的书包",
              "mode": "exact"
            },
            {
              "prompt": "หมีสีเขียว (3)",
              "answer": "绿色的熊",
              "mode": "exact"
            },
            {
              "prompt": "กระเป๋าสวย (4)",
              "answer": "漂亮的书包",
              "mode": "exact"
            },
            {
              "prompt": "หมีสีเขียว (5)",
              "answer": "绿色的熊",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "lǜsè de xióng",
              "answer": "绿色的熊",
              "mode": "exact"
            },
            {
              "prompt": "piàoliang de shūbāo",
              "answer": "漂亮的书包",
              "mode": "exact"
            },
            {
              "prompt": "lǜsè de xióng (3)",
              "answer": "绿色的熊",
              "mode": "exact"
            },
            {
              "prompt": "piàoliang de shūbāo (4)",
              "answer": "漂亮的书包",
              "mode": "exact"
            },
            {
              "prompt": "lǜsè de xióng (5)",
              "answer": "绿色的熊",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 的",
              "answer": "的",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 大",
              "answer": "大",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 小",
              "answer": "小",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 的 (4)",
              "answer": "的",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 大 (5)",
              "answer": "大",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 的",
              "answer": "答案示例：绿色的熊",
              "required": [
                "的"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 大",
              "answer": "答案示例：漂亮的书包",
              "required": [
                "大"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 小",
              "answer": "答案示例：绿色的熊",
              "required": [
                "小"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 新",
              "answer": "答案示例：漂亮的书包",
              "required": [
                "新"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 旧",
              "answer": "答案示例：绿色的熊",
              "required": [
                "旧"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "绿色的熊",
          "tokens": [
            "色",
            "熊",
            "绿",
            "的"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "漂亮的书包",
          "tokens": [
            "亮",
            "书",
            "漂",
            "的",
            "包"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "大的房子",
          "tokens": [
            "的",
            "子",
            "大",
            "房"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "新的书",
          "tokens": [
            "的",
            "新",
            "书"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "可爱的熊",
          "tokens": [
            "爱",
            "熊",
            "可",
            "的"
          ]
        }
      ]
    },
    {
      "id": 3,
      "title": "时间、地点的位置",
      "thaiTitle": "ตำแหน่งเวลาและสถานที่",
      "formula": "主语 + 时间 + 地点 + 谓语 + 宾语",
      "thai": "ประธาน + เวลา + สถานที่ + กริยา + กรรม",
      "thaiExplanation": "เวลาและสถานที่ในภาษาจีนมักอยู่ก่อนกริยา ลำดับที่ใช้บ่อยคือ ประธาน + เวลา + สถานที่ + กริยา + กรรม",
      "tip": "时间、地点通常放在动词前；先时间，后地点。",
      "examples": [
        {
          "zh": "我明天在家吃饭。",
          "pinyin": "Wǒ míngtiān zài jiā chī fàn.",
          "thai": "พรุ่งนี้ฉันกินข้าวที่บ้าน",
          "tone": "Wo3 mingtian1 zai4 jia1 chi1 fan4."
        },
        {
          "zh": "他今天在学校学习。",
          "pinyin": "Tā jīntiān zài xuéxiào xuéxí.",
          "thai": "วันนี้เขาเรียนที่โรงเรียน",
          "tone": "Ta1 jintian1 zai4 xuexiao4 xuexi2."
        }
      ],
      "words": [
        "今天",
        "明天",
        "在家",
        "在学校",
        "吃饭",
        "学习"
      ],
      "vocab": [
        {
          "word": "今天",
          "pinyin": "jīntiān",
          "tone": "jintian1",
          "thai": "วันนี้"
        },
        {
          "word": "明天",
          "pinyin": "míngtiān",
          "tone": "mingtian1",
          "thai": "พรุ่งนี้"
        },
        {
          "word": "在家",
          "pinyin": "zài jiā",
          "tone": "zai4 jia1",
          "thai": "อยู่บ้าน / ที่บ้าน"
        },
        {
          "word": "在学校",
          "pinyin": "zài xuéxiào",
          "tone": "zai4 xuexiao4",
          "thai": "ที่โรงเรียน"
        },
        {
          "word": "吃饭",
          "pinyin": "chī fàn",
          "tone": "chi1 fan4",
          "thai": "กินข้าว"
        },
        {
          "word": "学习",
          "pinyin": "xuéxí",
          "tone": "xuexi2",
          "thai": "เรียน / ศึกษา"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 今天 (jīntiān) แปลว่าอะไร?",
              "answer": "วันนี้",
              "mode": "choice",
              "options": [
                "พรุ่งนี้",
                "ที่โรงเรียน",
                "วันนี้",
                "อยู่บ้าน / ที่บ้าน"
              ]
            },
            {
              "prompt": "คำว่า 明天 (míngtiān) แปลว่าอะไร?",
              "answer": "พรุ่งนี้",
              "mode": "choice",
              "options": [
                "วันนี้",
                "ที่โรงเรียน",
                "พรุ่งนี้",
                "อยู่บ้าน / ที่บ้าน"
              ]
            },
            {
              "prompt": "คำว่า 在家 (zài jiā) แปลว่าอะไร?",
              "answer": "อยู่บ้าน / ที่บ้าน",
              "mode": "choice",
              "options": [
                "วันนี้",
                "ที่โรงเรียน",
                "อยู่บ้าน / ที่บ้าน",
                "พรุ่งนี้"
              ]
            },
            {
              "prompt": "คำว่า 在学校 (zài xuéxiào) แปลว่าอะไร?",
              "answer": "ที่โรงเรียน",
              "mode": "choice",
              "options": [
                "วันนี้",
                "อยู่บ้าน / ที่บ้าน",
                "ที่โรงเรียน",
                "พรุ่งนี้"
              ]
            },
            {
              "prompt": "คำไทย “วันนี้” ตรงกับคำจีนข้อใด?",
              "answer": "今天",
              "mode": "choice",
              "options": [
                "明天",
                "在学校",
                "今天",
                "在家"
              ]
            }
          ]
        },
        {
          "type": "ดูว่าผิดตรงไหนแล้วแก้ให้ถูก",
          "prompts": [
            {
              "prompt": "ดูว่าผิดตรงไหนแล้วแก้ให้ถูก: 我吃饭明天在家。",
              "answer": "我明天在家吃饭。",
              "mode": "exact"
            },
            {
              "prompt": "ดูว่าผิดตรงไหนแล้วแก้ให้ถูก: 他学习在学校今天。",
              "answer": "他今天在学校学习。",
              "mode": "exact"
            },
            {
              "prompt": "ดูว่าผิดตรงไหนแล้วแก้ให้ถูก: 我吃饭明天在家。 (3)",
              "answer": "我明天在家吃饭。",
              "mode": "exact"
            },
            {
              "prompt": "ดูว่าผิดตรงไหนแล้วแก้ให้ถูก: 他学习在学校今天。 (4)",
              "answer": "他今天在学校学习。",
              "mode": "exact"
            },
            {
              "prompt": "ดูว่าผิดตรงไหนแล้วแก้ให้ถูก: 我吃饭明天在家。 (5)",
              "answer": "我明天在家吃饭。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "พรุ่งนี้ฉันกินข้าวที่บ้าน",
              "answer": "我明天在家吃饭。",
              "mode": "exact"
            },
            {
              "prompt": "วันนี้เขาเรียนที่โรงเรียน",
              "answer": "他今天在学校学习。",
              "mode": "exact"
            },
            {
              "prompt": "พรุ่งนี้ฉันกินข้าวที่บ้าน (3)",
              "answer": "我明天在家吃饭。",
              "mode": "exact"
            },
            {
              "prompt": "วันนี้เขาเรียนที่โรงเรียน (4)",
              "answer": "他今天在学校学习。",
              "mode": "exact"
            },
            {
              "prompt": "พรุ่งนี้ฉันกินข้าวที่บ้าน (5)",
              "answer": "我明天在家吃饭。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ míngtiān zài jiā chī fàn.",
              "answer": "我明天在家吃饭。",
              "mode": "exact"
            },
            {
              "prompt": "Tā jīntiān zài xuéxiào xuéxí.",
              "answer": "他今天在学校学习。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ míngtiān zài jiā chī fàn. (3)",
              "answer": "我明天在家吃饭。",
              "mode": "exact"
            },
            {
              "prompt": "Tā jīntiān zài xuéxiào xuéxí. (4)",
              "answer": "他今天在学校学习。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ míngtiān zài jiā chī fàn. (5)",
              "answer": "我明天在家吃饭。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 今天",
              "answer": "今天",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 明天",
              "answer": "明天",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 在家",
              "answer": "在家",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 今天 (4)",
              "answer": "今天",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 明天 (5)",
              "answer": "明天",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 今天",
              "answer": "答案示例：我明天在家吃饭。",
              "required": [
                "今天"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 明天",
              "answer": "答案示例：他今天在学校学习。",
              "required": [
                "明天"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 在家",
              "answer": "答案示例：我明天在家吃饭。",
              "required": [
                "在家"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 在学校",
              "answer": "答案示例：他今天在学校学习。",
              "required": [
                "在学校"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 吃饭",
              "answer": "答案示例：我明天在家吃饭。",
              "required": [
                "吃饭"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我明天在家吃饭。",
          "tokens": [
            "我",
            "在家",
            "吃饭",
            "明天"
          ]
        },
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他今天在学校学习。",
          "tokens": [
            "他",
            "学习",
            "今天",
            "在学校"
          ]
        },
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง (3)",
          "answer": "我明天在家吃饭。",
          "tokens": [
            "我",
            "在家",
            "吃饭",
            "明天"
          ]
        },
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง (4)",
          "answer": "他今天在学校学习。",
          "tokens": [
            "他",
            "学习",
            "今天",
            "在学校"
          ]
        },
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "我明天在家吃饭。",
          "tokens": [
            "我",
            "在家",
            "吃饭",
            "明天"
          ]
        }
      ]
    },
    {
      "id": 4,
      "title": "的、得、地",
      "thaiTitle": "แยกใช้ 的 / 得 / 地",
      "formula": "的 + 名词 / 得 + 补语 / 地 + 动词",
      "thai": "的 ขยายนาม / 得 บอกผลหรือ程度 / 地 ขยายกริยา",
      "thaiExplanation": "ทั้งสามคำอ่านคล้าย de แต่หน้าที่ต่างกัน: 的 ขยายนาม, 得 ตามหลังกริยาเพื่อบอกผลหรือระดับ, 地 อยู่หน้ากริยาเพื่อบอกวิธีทำ",
      "tip": "三个 de 写法不同，功能也不同。",
      "examples": [
        {
          "zh": "我的手机",
          "pinyin": "wǒ de shǒujī",
          "thai": "โทรศัพท์ของฉัน",
          "tone": "wo3 de shouji1"
        },
        {
          "zh": "他说得很好。",
          "pinyin": "Tā shuō de hěn hǎo.",
          "thai": "เขาพูดได้ดีมาก",
          "tone": "Ta1 shuo1 de hen3 hao3."
        },
        {
          "zh": "他认真地写作业。",
          "pinyin": "Tā rènzhēn de xiě zuòyè.",
          "thai": "เขาทำการบ้านอย่างตั้งใจ",
          "tone": "Ta1 renzhen1 de xie3 zuoye4."
        }
      ],
      "words": [
        "的",
        "得",
        "地",
        "手机",
        "认真",
        "很好"
      ],
      "vocab": [
        {
          "word": "的",
          "pinyin": "de",
          "tone": "de",
          "thai": "ของ / ที่ใช้ขยายนาม"
        },
        {
          "word": "得",
          "pinyin": "de",
          "tone": "de",
          "thai": "ใช้บอกผลหรือระดับหลังกริยา"
        },
        {
          "word": "地",
          "pinyin": "de",
          "tone": "de",
          "thai": "ใช้นำหน้ากริยาเพื่อบอกวิธีทำ"
        },
        {
          "word": "手机",
          "pinyin": "shǒujī",
          "tone": "shouji1",
          "thai": "โทรศัพท์มือถือ"
        },
        {
          "word": "认真",
          "pinyin": "rènzhēn",
          "tone": "renzhen1",
          "thai": "ตั้งใจ / จริงจัง"
        },
        {
          "word": "很好",
          "pinyin": "hěn hǎo",
          "tone": "hen3 hao3",
          "thai": "ดีมาก"
        },
        {
          "word": "写作业",
          "pinyin": "xiě zuòyè",
          "tone": "xie3 zuoye4",
          "thai": "ทำการบ้าน"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 的 (de) แปลว่าอะไร?",
              "answer": "ของ / ที่ใช้ขยายนาม",
              "mode": "choice",
              "options": [
                "ใช้บอกผลหรือระดับหลังกริยา",
                "โทรศัพท์มือถือ",
                "ของ / ที่ใช้ขยายนาม",
                "ใช้นำหน้ากริยาเพื่อบอกวิธีทำ"
              ]
            },
            {
              "prompt": "คำว่า 得 (de) แปลว่าอะไร?",
              "answer": "ใช้บอกผลหรือระดับหลังกริยา",
              "mode": "choice",
              "options": [
                "ของ / ที่ใช้ขยายนาม",
                "โทรศัพท์มือถือ",
                "ใช้บอกผลหรือระดับหลังกริยา",
                "ใช้นำหน้ากริยาเพื่อบอกวิธีทำ"
              ]
            },
            {
              "prompt": "คำว่า 地 (de) แปลว่าอะไร?",
              "answer": "ใช้นำหน้ากริยาเพื่อบอกวิธีทำ",
              "mode": "choice",
              "options": [
                "ของ / ที่ใช้ขยายนาม",
                "โทรศัพท์มือถือ",
                "ใช้นำหน้ากริยาเพื่อบอกวิธีทำ",
                "ใช้บอกผลหรือระดับหลังกริยา"
              ]
            },
            {
              "prompt": "คำว่า 手机 (shǒujī) แปลว่าอะไร?",
              "answer": "โทรศัพท์มือถือ",
              "mode": "choice",
              "options": [
                "ของ / ที่ใช้ขยายนาม",
                "ใช้นำหน้ากริยาเพื่อบอกวิธีทำ",
                "โทรศัพท์มือถือ",
                "ใช้บอกผลหรือระดับหลังกริยา"
              ]
            },
            {
              "prompt": "คำไทย “ของ / ที่ใช้ขยายนาม” ตรงกับคำจีนข้อใด?",
              "answer": "的",
              "mode": "choice",
              "options": [
                "得",
                "手机",
                "的",
                "地"
              ]
            }
          ]
        },
        {
          "type": "เลือกคำตอบที่ถูกต้อง",
          "prompts": [
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__书包",
              "answer": "的",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 他说__很快",
              "answer": "得",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 她高兴__笑了",
              "answer": "地",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__书包 (4)",
              "answer": "的",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 他说__很快 (5)",
              "answer": "得",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยค",
          "prompts": [
            {
              "prompt": "แต่งประโยค: 的",
              "answer": "答案示例：我的书很好。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 得",
              "answer": "答案示例：他说得很好。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 地",
              "answer": "答案示例：他认真地写。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 的 (4)",
              "answer": "答案示例：我的书很好。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 得 (5)",
              "answer": "答案示例：他说得很好。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "โทรศัพท์ของฉัน",
              "answer": "我的手机",
              "mode": "exact"
            },
            {
              "prompt": "เขาพูดได้ดีมาก",
              "answer": "他说得很好。",
              "mode": "exact"
            },
            {
              "prompt": "เขาทำการบ้านอย่างตั้งใจ",
              "answer": "他认真地写作业。",
              "mode": "exact"
            },
            {
              "prompt": "โทรศัพท์ของฉัน (4)",
              "answer": "我的手机",
              "mode": "exact"
            },
            {
              "prompt": "เขาพูดได้ดีมาก (5)",
              "answer": "他说得很好。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "wǒ de shǒujī",
              "answer": "我的手机",
              "mode": "exact"
            },
            {
              "prompt": "Tā shuō de hěn hǎo.",
              "answer": "他说得很好。",
              "mode": "exact"
            },
            {
              "prompt": "Tā rènzhēn de xiě zuòyè.",
              "answer": "他认真地写作业。",
              "mode": "exact"
            },
            {
              "prompt": "wǒ de shǒujī (4)",
              "answer": "我的手机",
              "mode": "exact"
            },
            {
              "prompt": "Tā shuō de hěn hǎo. (5)",
              "answer": "他说得很好。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 的",
              "answer": "的",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 得",
              "answer": "得",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 地",
              "answer": "地",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 的 (4)",
              "answer": "的",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 得 (5)",
              "answer": "得",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 的",
              "answer": "答案示例：我的手机",
              "required": [
                "的"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 得",
              "answer": "答案示例：他说得很好。",
              "required": [
                "得"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 地",
              "answer": "答案示例：他认真地写作业。",
              "required": [
                "地"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 手机",
              "answer": "答案示例：我的手机",
              "required": [
                "手机"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 认真",
              "answer": "答案示例：他说得很好。",
              "required": [
                "认真"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我的书很好。",
          "tokens": [
            "的",
            "很",
            "我",
            "书",
            "好"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他说得很好。",
          "tokens": [
            "说",
            "很",
            "他",
            "得",
            "好"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他认真地写。",
          "tokens": [
            "认",
            "地",
            "他",
            "真",
            "写"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: โทรศัพท์ของฉัน",
          "answer": "我的手机",
          "tokens": [
            "的",
            "机",
            "我",
            "手"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขาทำการบ้านอย่างตั้งใจ",
          "answer": "他认真地写作业。",
          "tokens": [
            "认",
            "地",
            "作",
            "他",
            "真",
            "写",
            "业"
          ]
        }
      ]
    },
    {
      "id": 5,
      "title": "很 + 形容词",
      "thaiTitle": "很 + คำคุณศัพท์",
      "formula": "主语 + 很 + 形容词",
      "thai": "ประธาน + 很 + คำคุณศัพท์",
      "thaiExplanation": "คำคุณศัพท์ภาษาจีนเมื่อนำมาเป็นภาคแสดง มักใส่ 很 ข้างหน้า คำว่า 很 ในระดับต้นไม่จำเป็นต้องแปลว่า มาก เสมอไป",
      "tip": "中文形容词作谓语时常加“很”，不一定都表示“非常”。",
      "examples": [
        {
          "zh": "我很开心。",
          "pinyin": "Wǒ hěn kāixīn.",
          "thai": "ฉันดีใจ",
          "tone": "Wo3 hen3 kaixin1."
        },
        {
          "zh": "这个很大。",
          "pinyin": "Zhège hěn dà.",
          "thai": "อันนี้ใหญ่",
          "tone": "Zhege4 hen3 da4."
        }
      ],
      "words": [
        "很",
        "大",
        "小",
        "开心",
        "无聊",
        "漂亮"
      ],
      "vocab": [
        {
          "word": "很",
          "pinyin": "hěn",
          "tone": "hen3",
          "thai": "มาก / ใช้หน้าคำคุณศัพท์"
        },
        {
          "word": "大",
          "pinyin": "dà",
          "tone": "da4",
          "thai": "ใหญ่"
        },
        {
          "word": "小",
          "pinyin": "xiǎo",
          "tone": "xiao3",
          "thai": "เล็ก"
        },
        {
          "word": "开心",
          "pinyin": "kāixīn",
          "tone": "kaixin1",
          "thai": "ดีใจ"
        },
        {
          "word": "无聊",
          "pinyin": "wúliáo",
          "tone": "wuliao2",
          "thai": "น่าเบื่อ"
        },
        {
          "word": "漂亮",
          "pinyin": "piàoliang",
          "tone": "piaoliang4",
          "thai": "สวย"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 很 (hěn) แปลว่าอะไร?",
              "answer": "มาก / ใช้หน้าคำคุณศัพท์",
              "mode": "choice",
              "options": [
                "ใหญ่",
                "ดีใจ",
                "มาก / ใช้หน้าคำคุณศัพท์",
                "เล็ก"
              ]
            },
            {
              "prompt": "คำว่า 大 (dà) แปลว่าอะไร?",
              "answer": "ใหญ่",
              "mode": "choice",
              "options": [
                "มาก / ใช้หน้าคำคุณศัพท์",
                "ดีใจ",
                "ใหญ่",
                "เล็ก"
              ]
            },
            {
              "prompt": "คำว่า 小 (xiǎo) แปลว่าอะไร?",
              "answer": "เล็ก",
              "mode": "choice",
              "options": [
                "มาก / ใช้หน้าคำคุณศัพท์",
                "ดีใจ",
                "เล็ก",
                "ใหญ่"
              ]
            },
            {
              "prompt": "คำว่า 开心 (kāixīn) แปลว่าอะไร?",
              "answer": "ดีใจ",
              "mode": "choice",
              "options": [
                "มาก / ใช้หน้าคำคุณศัพท์",
                "เล็ก",
                "ดีใจ",
                "ใหญ่"
              ]
            },
            {
              "prompt": "คำไทย “มาก / ใช้หน้าคำคุณศัพท์” ตรงกับคำจีนข้อใด?",
              "answer": "很",
              "mode": "choice",
              "options": [
                "大",
                "开心",
                "很",
                "小"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__开心。",
              "answer": "很",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 这个__大。",
              "answer": "很",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 那本书__新。",
              "answer": "很",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__开心。 (4)",
              "answer": "很",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 这个__大。 (5)",
              "answer": "很",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันยุ่งมาก/ยุ่ง",
              "answer": "我很忙。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: อันนี้เล็ก",
              "answer": "这个很小。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขาดีใจ",
              "answer": "他很开心。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันยุ่งมาก/ยุ่ง (4)",
              "answer": "我很忙。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: อันนี้เล็ก (5)",
              "answer": "这个很小。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันดีใจ",
              "answer": "我很开心。",
              "mode": "exact"
            },
            {
              "prompt": "อันนี้ใหญ่",
              "answer": "这个很大。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันดีใจ (3)",
              "answer": "我很开心。",
              "mode": "exact"
            },
            {
              "prompt": "อันนี้ใหญ่ (4)",
              "answer": "这个很大。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันดีใจ (5)",
              "answer": "我很开心。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ hěn kāixīn.",
              "answer": "我很开心。",
              "mode": "exact"
            },
            {
              "prompt": "Zhège hěn dà.",
              "answer": "这个很大。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ hěn kāixīn. (3)",
              "answer": "我很开心。",
              "mode": "exact"
            },
            {
              "prompt": "Zhège hěn dà. (4)",
              "answer": "这个很大。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ hěn kāixīn. (5)",
              "answer": "我很开心。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 很",
              "answer": "很",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 大",
              "answer": "大",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 小",
              "answer": "小",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 很 (4)",
              "answer": "很",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 大 (5)",
              "answer": "大",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 很",
              "answer": "答案示例：我很开心。",
              "required": [
                "很"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 大",
              "answer": "答案示例：这个很大。",
              "required": [
                "大"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 小",
              "answer": "答案示例：我很开心。",
              "required": [
                "小"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 开心",
              "answer": "答案示例：这个很大。",
              "required": [
                "开心"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 无聊",
              "answer": "答案示例：我很开心。",
              "required": [
                "无聊"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "这个很小。",
          "tokens": [
            "个",
            "小",
            "这",
            "很"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他很开心。",
          "tokens": [
            "很",
            "心",
            "他",
            "开"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันดีใจ",
          "answer": "我很开心。",
          "tokens": [
            "很",
            "心",
            "我",
            "开"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: อันนี้ใหญ่",
          "answer": "这个很大。",
          "tokens": [
            "个",
            "大",
            "这",
            "很"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "这个很小。",
          "tokens": [
            "个",
            "小",
            "这",
            "很"
          ]
        }
      ]
    },
    {
      "id": 6,
      "title": "有 / 没有",
      "thaiTitle": "有 / 没有: มี / ไม่มี",
      "formula": "主语 + 有 / 没有 + 名词",
      "thai": "มี / ไม่มี",
      "thaiExplanation": "ใช้ 有 เพื่อบอกว่ามีหรือครอบครอง ใช้ 没有 เพื่อปฏิเสธ ห้ามพูดว่า 不有",
      "tip": "表示拥有或存在；否定不用“不有”，要说“没有”。",
      "examples": [
        {
          "zh": "我有手机。",
          "pinyin": "Wǒ yǒu shǒujī.",
          "thai": "ฉันมีโทรศัพท์",
          "tone": "Wo3 you3 shouji1."
        },
        {
          "zh": "他没有钱。",
          "pinyin": "Tā méiyǒu qián.",
          "thai": "เขาไม่มีเงิน",
          "tone": "Ta1 meiyou3 qian2."
        }
      ],
      "words": [
        "有",
        "没有",
        "手机",
        "钱",
        "书",
        "朋友"
      ],
      "vocab": [
        {
          "word": "有",
          "pinyin": "yǒu",
          "tone": "you3",
          "thai": "มี"
        },
        {
          "word": "没有",
          "pinyin": "méiyǒu",
          "tone": "meiyou3",
          "thai": "ไม่มี"
        },
        {
          "word": "手机",
          "pinyin": "shǒujī",
          "tone": "shouji1",
          "thai": "โทรศัพท์มือถือ"
        },
        {
          "word": "钱",
          "pinyin": "qián",
          "tone": "qian2",
          "thai": "เงิน"
        },
        {
          "word": "书",
          "pinyin": "shū",
          "tone": "shu1",
          "thai": "หนังสือ"
        },
        {
          "word": "朋友",
          "pinyin": "péngyou",
          "tone": "pengyou2",
          "thai": "เพื่อน"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 有 (yǒu) แปลว่าอะไร?",
              "answer": "มี",
              "mode": "choice",
              "options": [
                "ไม่มี",
                "เงิน",
                "มี",
                "โทรศัพท์มือถือ"
              ]
            },
            {
              "prompt": "คำว่า 没有 (méiyǒu) แปลว่าอะไร?",
              "answer": "ไม่มี",
              "mode": "choice",
              "options": [
                "มี",
                "เงิน",
                "ไม่มี",
                "โทรศัพท์มือถือ"
              ]
            },
            {
              "prompt": "คำว่า 手机 (shǒujī) แปลว่าอะไร?",
              "answer": "โทรศัพท์มือถือ",
              "mode": "choice",
              "options": [
                "มี",
                "เงิน",
                "โทรศัพท์มือถือ",
                "ไม่มี"
              ]
            },
            {
              "prompt": "คำว่า 钱 (qián) แปลว่าอะไร?",
              "answer": "เงิน",
              "mode": "choice",
              "options": [
                "มี",
                "โทรศัพท์มือถือ",
                "เงิน",
                "ไม่มี"
              ]
            },
            {
              "prompt": "คำไทย “มี” ตรงกับคำจีนข้อใด?",
              "answer": "有",
              "mode": "choice",
              "options": [
                "没有",
                "钱",
                "有",
                "手机"
              ]
            }
          ]
        },
        {
          "type": "เลือกคำตอบที่ถูกต้อง",
          "prompts": [
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__一本书。",
              "answer": "有",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 他__手机。",
              "answer": "没有",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 这里__水吗？",
              "answer": "有",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__一本书。 (4)",
              "answer": "有",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 他__手机。 (5)",
              "answer": "没有",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แก้ประโยคผิด",
          "prompts": [
            {
              "prompt": "แก้ประโยคผิด: 我不有钱。",
              "answer": "我没有钱。",
              "mode": "exact"
            },
            {
              "prompt": "แก้ประโยคผิด: 她没朋友。",
              "answer": "她没有朋友。",
              "mode": "exact"
            },
            {
              "prompt": "แก้ประโยคผิด: 我不有钱。 (3)",
              "answer": "我没有钱。",
              "mode": "exact"
            },
            {
              "prompt": "แก้ประโยคผิด: 她没朋友。 (4)",
              "answer": "她没有朋友。",
              "mode": "exact"
            },
            {
              "prompt": "แก้ประโยคผิด: 我不有钱。 (5)",
              "answer": "我没有钱。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันมีโทรศัพท์",
              "answer": "我有手机。",
              "mode": "exact"
            },
            {
              "prompt": "เขาไม่มีเงิน",
              "answer": "他没有钱。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันมีโทรศัพท์ (3)",
              "answer": "我有手机。",
              "mode": "exact"
            },
            {
              "prompt": "เขาไม่มีเงิน (4)",
              "answer": "他没有钱。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันมีโทรศัพท์ (5)",
              "answer": "我有手机。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ yǒu shǒujī.",
              "answer": "我有手机。",
              "mode": "exact"
            },
            {
              "prompt": "Tā méiyǒu qián.",
              "answer": "他没有钱。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ yǒu shǒujī. (3)",
              "answer": "我有手机。",
              "mode": "exact"
            },
            {
              "prompt": "Tā méiyǒu qián. (4)",
              "answer": "他没有钱。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ yǒu shǒujī. (5)",
              "answer": "我有手机。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 有",
              "answer": "有",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 没有",
              "answer": "没有",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 手机",
              "answer": "手机",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 有 (4)",
              "answer": "有",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 没有 (5)",
              "answer": "没有",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 有",
              "answer": "答案示例：我有手机。",
              "required": [
                "有"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 没有",
              "answer": "答案示例：他没有钱。",
              "required": [
                "没有"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 手机",
              "answer": "答案示例：我有手机。",
              "required": [
                "手机"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 钱",
              "answer": "答案示例：他没有钱。",
              "required": [
                "钱"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 书",
              "answer": "答案示例：我有手机。",
              "required": [
                "书"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我没有钱。",
          "tokens": [
            "没",
            "钱",
            "我",
            "有"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "她没有朋友。",
          "tokens": [
            "没",
            "朋",
            "她",
            "有",
            "友"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันมีโทรศัพท์",
          "answer": "我有手机。",
          "tokens": [
            "有",
            "机",
            "我",
            "手"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขาไม่มีเงิน",
          "answer": "他没有钱。",
          "tokens": [
            "没",
            "钱",
            "他",
            "有"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "我没有钱。",
          "tokens": [
            "没",
            "钱",
            "我",
            "有"
          ]
        }
      ]
    },
    {
      "id": 7,
      "title": "在 + 地点",
      "thaiTitle": "在 + สถานที่",
      "formula": "主语 + 在 + 地点 + 动作 / 主语 + 在 + 地点",
      "thai": "อยู่ที่ / ทำอะไรที่ไหน",
      "thaiExplanation": "在 ใช้บอกว่าอยู่ที่ไหน หรือบอกว่าสิ่งใดเกิดขึ้นที่ไหน โดยตำแหน่งสถานที่จะมาก่อนกริยา",
      "tip": "“在”可表示位置，也可把地点放在动词前。",
      "examples": [
        {
          "zh": "我在家。",
          "pinyin": "Wǒ zài jiā.",
          "thai": "ฉันอยู่บ้าน",
          "tone": "Wo3 zai4 jia1."
        },
        {
          "zh": "他在学校学习。",
          "pinyin": "Tā zài xuéxiào xuéxí.",
          "thai": "เขาเรียนที่โรงเรียน",
          "tone": "Ta1 zai4 xuexiao4 xuexi2."
        }
      ],
      "words": [
        "在",
        "家",
        "学校",
        "餐厅",
        "医院",
        "学习"
      ],
      "vocab": [
        {
          "word": "在",
          "pinyin": "zài",
          "tone": "zai4",
          "thai": "อยู่ที่"
        },
        {
          "word": "家",
          "pinyin": "jiā",
          "tone": "jia1",
          "thai": "บ้าน"
        },
        {
          "word": "学校",
          "pinyin": "xuéxiào",
          "tone": "xuexiao4",
          "thai": "โรงเรียน"
        },
        {
          "word": "餐厅",
          "pinyin": "cāntīng",
          "tone": "canting1",
          "thai": "ร้านอาหาร"
        },
        {
          "word": "医院",
          "pinyin": "yīyuàn",
          "tone": "yiyuan4",
          "thai": "โรงพยาบาล"
        },
        {
          "word": "学习",
          "pinyin": "xuéxí",
          "tone": "xuexi2",
          "thai": "เรียน / ศึกษา"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 在 (zài) แปลว่าอะไร?",
              "answer": "อยู่ที่",
              "mode": "choice",
              "options": [
                "บ้าน",
                "ร้านอาหาร",
                "อยู่ที่",
                "โรงเรียน"
              ]
            },
            {
              "prompt": "คำว่า 家 (jiā) แปลว่าอะไร?",
              "answer": "บ้าน",
              "mode": "choice",
              "options": [
                "อยู่ที่",
                "ร้านอาหาร",
                "บ้าน",
                "โรงเรียน"
              ]
            },
            {
              "prompt": "คำว่า 学校 (xuéxiào) แปลว่าอะไร?",
              "answer": "โรงเรียน",
              "mode": "choice",
              "options": [
                "อยู่ที่",
                "ร้านอาหาร",
                "โรงเรียน",
                "บ้าน"
              ]
            },
            {
              "prompt": "คำว่า 餐厅 (cāntīng) แปลว่าอะไร?",
              "answer": "ร้านอาหาร",
              "mode": "choice",
              "options": [
                "อยู่ที่",
                "โรงเรียน",
                "ร้านอาหาร",
                "บ้าน"
              ]
            },
            {
              "prompt": "คำไทย “อยู่ที่” ตรงกับคำจีนข้อใด?",
              "answer": "在",
              "mode": "choice",
              "options": [
                "家",
                "餐厅",
                "在",
                "学校"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__家。",
              "answer": "在",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__学校学习。",
              "answer": "在",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 你__餐厅吃饭吗？",
              "answer": "在",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__家。 (4)",
              "answer": "在",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__学校学习。 (5)",
              "answer": "在",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันอยู่บ้าน",
              "answer": "我在家。",
              "mode": "exact"
            },
            {
              "prompt": "เขาเรียนที่โรงเรียน",
              "answer": "他在学校学习。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันอยู่บ้าน (3)",
              "answer": "我在家。",
              "mode": "exact"
            },
            {
              "prompt": "เขาเรียนที่โรงเรียน (4)",
              "answer": "他在学校学习。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันอยู่บ้าน (5)",
              "answer": "我在家。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ zài jiā.",
              "answer": "我在家。",
              "mode": "exact"
            },
            {
              "prompt": "Tā zài xuéxiào xuéxí.",
              "answer": "他在学校学习。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ zài jiā. (3)",
              "answer": "我在家。",
              "mode": "exact"
            },
            {
              "prompt": "Tā zài xuéxiào xuéxí. (4)",
              "answer": "他在学校学习。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ zài jiā. (5)",
              "answer": "我在家。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 在",
              "answer": "在",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 家",
              "answer": "家",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 学校",
              "answer": "学校",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 在 (4)",
              "answer": "在",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 家 (5)",
              "answer": "家",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 在",
              "answer": "答案示例：我在家。",
              "required": [
                "在"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 家",
              "answer": "答案示例：他在学校学习。",
              "required": [
                "家"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 学校",
              "answer": "答案示例：我在家。",
              "required": [
                "学校"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 餐厅",
              "answer": "答案示例：他在学校学习。",
              "required": [
                "餐厅"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 医院",
              "answer": "答案示例：我在家。",
              "required": [
                "医院"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "她在医院工作。",
          "tokens": [
            "工作",
            "她",
            "在医院"
          ]
        },
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我在家看书。",
          "tokens": [
            "看书",
            "我",
            "在家"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันอยู่บ้าน",
          "answer": "我在家。",
          "tokens": [
            "在",
            "我",
            "家"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขาเรียนที่โรงเรียน",
          "answer": "他在学校学习。",
          "tokens": [
            "在",
            "校",
            "习",
            "他",
            "学",
            "学"
          ]
        },
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "她在医院工作。",
          "tokens": [
            "工作",
            "她",
            "在医院"
          ]
        }
      ]
    },
    {
      "id": 8,
      "title": "着：动作状态",
      "thaiTitle": "着: สภาพที่คงอยู่",
      "formula": "动词 + 着 / 地点 + 动词 + 着 + 名词",
      "thai": "บอกสภาพที่คงอยู่",
      "thaiExplanation": "着 วางหลังกริยาเพื่อบอกว่าสภาพนั้นยังคงอยู่ เช่น ประตูเปิดอยู่ หรือมีหนังสือวางอยู่บนโต๊ะ",
      "tip": "“着”强调动作后的状态正在持续，如“门开着”。",
      "examples": [
        {
          "zh": "门开着。",
          "pinyin": "Mén kāi zhe.",
          "thai": "ประตูเปิดอยู่",
          "tone": "Men2 kai1 zhe."
        },
        {
          "zh": "桌子上放着一本书。",
          "pinyin": "Zhuōzi shàng fàng zhe yì běn shū.",
          "thai": "บนโต๊ะมีหนังสือวางอยู่หนึ่งเล่ม",
          "tone": "Zhuozi1 shang4 fang4 zhe yi4 ben3 shu1."
        }
      ],
      "words": [
        "着",
        "开",
        "坐",
        "放",
        "拿",
        "桌子"
      ],
      "vocab": [
        {
          "word": "着",
          "pinyin": "zhe",
          "tone": "zhe",
          "thai": "อยู่ / คงสภาพ"
        },
        {
          "word": "开",
          "pinyin": "kāi",
          "tone": "kai1",
          "thai": "เปิด"
        },
        {
          "word": "坐",
          "pinyin": "zuò",
          "tone": "zuo4",
          "thai": "นั่ง"
        },
        {
          "word": "放",
          "pinyin": "fàng",
          "tone": "fang4",
          "thai": "วาง / ใส่"
        },
        {
          "word": "拿",
          "pinyin": "ná",
          "tone": "na2",
          "thai": "ถือ / เอา"
        },
        {
          "word": "桌子",
          "pinyin": "zhuōzi",
          "tone": "zhuozi1",
          "thai": "โต๊ะ"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 着 (zhe) แปลว่าอะไร?",
              "answer": "อยู่ / คงสภาพ",
              "mode": "choice",
              "options": [
                "เปิด",
                "วาง / ใส่",
                "อยู่ / คงสภาพ",
                "นั่ง"
              ]
            },
            {
              "prompt": "คำว่า 开 (kāi) แปลว่าอะไร?",
              "answer": "เปิด",
              "mode": "choice",
              "options": [
                "อยู่ / คงสภาพ",
                "วาง / ใส่",
                "เปิด",
                "นั่ง"
              ]
            },
            {
              "prompt": "คำว่า 坐 (zuò) แปลว่าอะไร?",
              "answer": "นั่ง",
              "mode": "choice",
              "options": [
                "อยู่ / คงสภาพ",
                "วาง / ใส่",
                "นั่ง",
                "เปิด"
              ]
            },
            {
              "prompt": "คำว่า 放 (fàng) แปลว่าอะไร?",
              "answer": "วาง / ใส่",
              "mode": "choice",
              "options": [
                "อยู่ / คงสภาพ",
                "นั่ง",
                "วาง / ใส่",
                "เปิด"
              ]
            },
            {
              "prompt": "คำไทย “อยู่ / คงสภาพ” ตรงกับคำจีนข้อใด?",
              "answer": "着",
              "mode": "choice",
              "options": [
                "开",
                "放",
                "着",
                "坐"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 门开__。",
              "answer": "着",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他坐__看书。",
              "answer": "着",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 桌子上放__一本书。",
              "answer": "着",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 门开__。 (4)",
              "answer": "着",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他坐__看书。 (5)",
              "answer": "着",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: ประตูปิดอยู่",
              "answer": "门关着。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขาถือโทรศัพท์อยู่",
              "answer": "他拿着手机。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ประตูปิดอยู่ (3)",
              "answer": "门关着。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขาถือโทรศัพท์อยู่ (4)",
              "answer": "他拿着手机。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ประตูปิดอยู่ (5)",
              "answer": "门关着。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ประตูเปิดอยู่",
              "answer": "门开着。",
              "mode": "exact"
            },
            {
              "prompt": "บนโต๊ะมีหนังสือวางอยู่หนึ่งเล่ม",
              "answer": "桌子上放着一本书。",
              "mode": "exact"
            },
            {
              "prompt": "ประตูเปิดอยู่ (3)",
              "answer": "门开着。",
              "mode": "exact"
            },
            {
              "prompt": "บนโต๊ะมีหนังสือวางอยู่หนึ่งเล่ม (4)",
              "answer": "桌子上放着一本书。",
              "mode": "exact"
            },
            {
              "prompt": "ประตูเปิดอยู่ (5)",
              "answer": "门开着。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Mén kāi zhe.",
              "answer": "门开着。",
              "mode": "exact"
            },
            {
              "prompt": "Zhuōzi shàng fàng zhe yì běn shū.",
              "answer": "桌子上放着一本书。",
              "mode": "exact"
            },
            {
              "prompt": "Mén kāi zhe. (3)",
              "answer": "门开着。",
              "mode": "exact"
            },
            {
              "prompt": "Zhuōzi shàng fàng zhe yì běn shū. (4)",
              "answer": "桌子上放着一本书。",
              "mode": "exact"
            },
            {
              "prompt": "Mén kāi zhe. (5)",
              "answer": "门开着。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 着",
              "answer": "着",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 开",
              "answer": "开",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 坐",
              "answer": "坐",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 着 (4)",
              "answer": "着",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 开 (5)",
              "answer": "开",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 着",
              "answer": "答案示例：门开着。",
              "required": [
                "着"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 开",
              "answer": "答案示例：桌子上放着一本书。",
              "required": [
                "开"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 坐",
              "answer": "答案示例：门开着。",
              "required": [
                "坐"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 放",
              "answer": "答案示例：桌子上放着一本书。",
              "required": [
                "放"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 拿",
              "answer": "答案示例：门开着。",
              "required": [
                "拿"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "门关着。",
          "tokens": [
            "关",
            "门",
            "着"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他拿着手机。",
          "tokens": [
            "拿",
            "手",
            "他",
            "着",
            "机"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ประตูเปิดอยู่",
          "answer": "门开着。",
          "tokens": [
            "开",
            "门",
            "着"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: บนโต๊ะมีหนังสือวางอยู่หนึ่งเล่ม",
          "answer": "桌子上放着一本书。",
          "tokens": [
            "子",
            "放",
            "一",
            "书",
            "桌",
            "上",
            "着",
            "本"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "门关着。",
          "tokens": [
            "关",
            "门",
            "着"
          ]
        }
      ]
    },
    {
      "id": 9,
      "title": "呢：追问与状态",
      "thaiTitle": "呢: ถามต่อและบอกสถานะ",
      "formula": "名词/代词 + 呢？ / 动作 + 着 + 呢",
      "thai": "แล้ว...ล่ะ / กำลัง...อยู่",
      "thaiExplanation": "呢 ใช้ถามต่อแบบ แล้ว...ล่ะ หรือใช้เน้นว่าสิ่งหนึ่งกำลังดำเนินอยู่ เช่น กำลังอ่านหนังสืออยู่",
      "tip": "“呢”常用于追问、强调正在进行或说明状态。",
      "examples": [
        {
          "zh": "我的钥匙呢？",
          "pinyin": "Wǒ de yàoshi ne?",
          "thai": "กุญแจของฉันล่ะ",
          "tone": "Wo3 de yaoshi4 ne?"
        },
        {
          "zh": "他看书呢。",
          "pinyin": "Tā kàn shū ne.",
          "thai": "เขากำลังอ่านหนังสืออยู่",
          "tone": "Ta1 kan4 shu1 ne."
        }
      ],
      "words": [
        "呢",
        "钥匙",
        "手机",
        "看书",
        "等",
        "找"
      ],
      "vocab": [
        {
          "word": "呢",
          "pinyin": "ne",
          "tone": "ne",
          "thai": "ล่ะ / กำลัง...อยู่"
        },
        {
          "word": "钥匙",
          "pinyin": "yàoshi",
          "tone": "yaoshi4",
          "thai": "กุญแจ"
        },
        {
          "word": "手机",
          "pinyin": "shǒujī",
          "tone": "shouji1",
          "thai": "โทรศัพท์มือถือ"
        },
        {
          "word": "看书",
          "pinyin": "kàn shū",
          "tone": "kan4 shu1",
          "thai": "อ่านหนังสือ"
        },
        {
          "word": "等",
          "pinyin": "děng",
          "tone": "deng3",
          "thai": "รอ"
        },
        {
          "word": "找",
          "pinyin": "zhǎo",
          "tone": "zhao3",
          "thai": "หา"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 呢 (ne) แปลว่าอะไร?",
              "answer": "ล่ะ / กำลัง...อยู่",
              "mode": "choice",
              "options": [
                "กุญแจ",
                "อ่านหนังสือ",
                "ล่ะ / กำลัง...อยู่",
                "โทรศัพท์มือถือ"
              ]
            },
            {
              "prompt": "คำว่า 钥匙 (yàoshi) แปลว่าอะไร?",
              "answer": "กุญแจ",
              "mode": "choice",
              "options": [
                "ล่ะ / กำลัง...อยู่",
                "อ่านหนังสือ",
                "กุญแจ",
                "โทรศัพท์มือถือ"
              ]
            },
            {
              "prompt": "คำว่า 手机 (shǒujī) แปลว่าอะไร?",
              "answer": "โทรศัพท์มือถือ",
              "mode": "choice",
              "options": [
                "ล่ะ / กำลัง...อยู่",
                "อ่านหนังสือ",
                "โทรศัพท์มือถือ",
                "กุญแจ"
              ]
            },
            {
              "prompt": "คำว่า 看书 (kàn shū) แปลว่าอะไร?",
              "answer": "อ่านหนังสือ",
              "mode": "choice",
              "options": [
                "ล่ะ / กำลัง...อยู่",
                "โทรศัพท์มือถือ",
                "อ่านหนังสือ",
                "กุญแจ"
              ]
            },
            {
              "prompt": "คำไทย “ล่ะ / กำลัง...อยู่” ตรงกับคำจีนข้อใด?",
              "answer": "呢",
              "mode": "choice",
              "options": [
                "钥匙",
                "看书",
                "呢",
                "手机"
              ]
            }
          ]
        },
        {
          "type": "เติมประโยคให้สมบูรณ์",
          "prompts": [
            {
              "prompt": "เติมประโยคให้สมบูรณ์: 我的手机__？",
              "answer": "呢",
              "mode": "exact"
            },
            {
              "prompt": "เติมประโยคให้สมบูรณ์: 那你__？",
              "answer": "呢",
              "mode": "exact"
            },
            {
              "prompt": "เติมประโยคให้สมบูรณ์: 他看书__。",
              "answer": "呢",
              "mode": "exact"
            },
            {
              "prompt": "เติมประโยคให้สมบูรณ์: 我的手机__？ (4)",
              "answer": "呢",
              "mode": "exact"
            },
            {
              "prompt": "เติมประโยคให้สมบูรณ์: 那你__？ (5)",
              "answer": "呢",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "ตอบคำถาม",
          "prompts": [
            {
              "prompt": "ตอบคำถาม: 我的钥匙呢？",
              "answer": "在包里。",
              "mode": "exact"
            },
            {
              "prompt": "ตอบคำถาม: 手机呢？",
              "answer": "在桌子上。",
              "mode": "exact"
            },
            {
              "prompt": "ตอบคำถาม: 我的钥匙呢？ (3)",
              "answer": "在包里。",
              "mode": "exact"
            },
            {
              "prompt": "ตอบคำถาม: 手机呢？ (4)",
              "answer": "在桌子上。",
              "mode": "exact"
            },
            {
              "prompt": "ตอบคำถาม: 我的钥匙呢？ (5)",
              "answer": "在包里。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "กุญแจของฉันล่ะ",
              "answer": "我的钥匙呢？",
              "mode": "exact"
            },
            {
              "prompt": "เขากำลังอ่านหนังสืออยู่",
              "answer": "他看书呢。",
              "mode": "exact"
            },
            {
              "prompt": "กุญแจของฉันล่ะ (3)",
              "answer": "我的钥匙呢？",
              "mode": "exact"
            },
            {
              "prompt": "เขากำลังอ่านหนังสืออยู่ (4)",
              "answer": "他看书呢。",
              "mode": "exact"
            },
            {
              "prompt": "กุญแจของฉันล่ะ (5)",
              "answer": "我的钥匙呢？",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ de yàoshi ne?",
              "answer": "我的钥匙呢？",
              "mode": "exact"
            },
            {
              "prompt": "Tā kàn shū ne.",
              "answer": "他看书呢。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ de yàoshi ne? (3)",
              "answer": "我的钥匙呢？",
              "mode": "exact"
            },
            {
              "prompt": "Tā kàn shū ne. (4)",
              "answer": "他看书呢。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ de yàoshi ne? (5)",
              "answer": "我的钥匙呢？",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 呢",
              "answer": "呢",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 钥匙",
              "answer": "钥匙",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 手机",
              "answer": "手机",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 呢 (4)",
              "answer": "呢",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 钥匙 (5)",
              "answer": "钥匙",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 呢",
              "answer": "答案示例：我的钥匙呢？",
              "required": [
                "呢"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 钥匙",
              "answer": "答案示例：他看书呢。",
              "required": [
                "钥匙"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 手机",
              "answer": "答案示例：我的钥匙呢？",
              "required": [
                "手机"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 看书",
              "answer": "答案示例：他看书呢。",
              "required": [
                "看书"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 等",
              "answer": "答案示例：我的钥匙呢？",
              "required": [
                "等"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "在包里。",
          "tokens": [
            "包",
            "在",
            "里"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "在桌子上。",
          "tokens": [
            "桌",
            "上",
            "在",
            "子"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: กุญแจของฉันล่ะ",
          "answer": "我的钥匙呢？",
          "tokens": [
            "的",
            "匙",
            "我",
            "钥",
            "呢"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขากำลังอ่านหนังสืออยู่",
          "answer": "他看书呢。",
          "tokens": [
            "看",
            "呢",
            "他",
            "书"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "在包里。",
          "tokens": [
            "包",
            "在",
            "里"
          ]
        }
      ]
    },
    {
      "id": 10,
      "title": "要 / 想",
      "thaiTitle": "要 / 想: ต้องการ / อยาก",
      "formula": "要=需要/将要/想要 / 想=想法或愿望",
      "thai": "要 ต้องการ/จะ / 想 อยาก/คิด",
      "thaiExplanation": "要 ให้ความรู้สึกตรงกว่า ใช้ได้ทั้งต้องการและกำลังจะทำ ส่วน 想 เน้นความอยากหรือความคิดในใจ",
      "tip": "“要”更直接，也可表示将来；“想”更像愿望或想法。",
      "examples": [
        {
          "zh": "我要喝水。",
          "pinyin": "Wǒ yào hē shuǐ.",
          "thai": "ฉันจะ/ต้องการดื่มน้ำ",
          "tone": "Wo3 yao4 he1 shui3."
        },
        {
          "zh": "我想学中文。",
          "pinyin": "Wǒ xiǎng xué Zhōngwén.",
          "thai": "ฉันอยากเรียนจีน",
          "tone": "Wo3 xiang3 xue2 Zhongwen2."
        }
      ],
      "words": [
        "要",
        "想",
        "喝水",
        "买",
        "学习",
        "回家"
      ],
      "vocab": [
        {
          "word": "要",
          "pinyin": "yào",
          "tone": "yao4",
          "thai": "ต้องการ / จะ"
        },
        {
          "word": "想",
          "pinyin": "xiǎng",
          "tone": "xiang3",
          "thai": "อยาก / คิด"
        },
        {
          "word": "喝水",
          "pinyin": "hē shuǐ",
          "tone": "he1 shui3",
          "thai": "ดื่มน้ำ"
        },
        {
          "word": "买",
          "pinyin": "mǎi",
          "tone": "mai3",
          "thai": "ซื้อ"
        },
        {
          "word": "学习",
          "pinyin": "xuéxí",
          "tone": "xuexi2",
          "thai": "เรียน / ศึกษา"
        },
        {
          "word": "回家",
          "pinyin": "huí jiā",
          "tone": "hui2 jia1",
          "thai": "กลับบ้าน"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 要 (yào) แปลว่าอะไร?",
              "answer": "ต้องการ / จะ",
              "mode": "choice",
              "options": [
                "อยาก / คิด",
                "ซื้อ",
                "ต้องการ / จะ",
                "ดื่มน้ำ"
              ]
            },
            {
              "prompt": "คำว่า 想 (xiǎng) แปลว่าอะไร?",
              "answer": "อยาก / คิด",
              "mode": "choice",
              "options": [
                "ต้องการ / จะ",
                "ซื้อ",
                "อยาก / คิด",
                "ดื่มน้ำ"
              ]
            },
            {
              "prompt": "คำว่า 喝水 (hē shuǐ) แปลว่าอะไร?",
              "answer": "ดื่มน้ำ",
              "mode": "choice",
              "options": [
                "ต้องการ / จะ",
                "ซื้อ",
                "ดื่มน้ำ",
                "อยาก / คิด"
              ]
            },
            {
              "prompt": "คำว่า 买 (mǎi) แปลว่าอะไร?",
              "answer": "ซื้อ",
              "mode": "choice",
              "options": [
                "ต้องการ / จะ",
                "ดื่มน้ำ",
                "ซื้อ",
                "อยาก / คิด"
              ]
            },
            {
              "prompt": "คำไทย “ต้องการ / จะ” ตรงกับคำจีนข้อใด?",
              "answer": "要",
              "mode": "choice",
              "options": [
                "想",
                "买",
                "要",
                "喝水"
              ]
            }
          ]
        },
        {
          "type": "เลือกคำตอบที่ถูกต้อง",
          "prompts": [
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__买咖啡。",
              "answer": "想/要",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 明天我要__家。",
              "answer": "回",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 他__学中文。",
              "answer": "想/要",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__买咖啡。 (4)",
              "answer": "想/要",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 明天我要__家。 (5)",
              "answer": "回",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยค",
          "prompts": [
            {
              "prompt": "แต่งประโยค: 要",
              "answer": "答案示例：我要回家。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 想",
              "answer": "答案示例：我想喝水。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 要 (3)",
              "answer": "答案示例：我要回家。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 想 (4)",
              "answer": "答案示例：我想喝水。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 要 (5)",
              "answer": "答案示例：我要回家。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันจะ/ต้องการดื่มน้ำ",
              "answer": "我要喝水。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันอยากเรียนจีน",
              "answer": "我想学中文。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันจะ/ต้องการดื่มน้ำ (3)",
              "answer": "我要喝水。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันอยากเรียนจีน (4)",
              "answer": "我想学中文。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันจะ/ต้องการดื่มน้ำ (5)",
              "answer": "我要喝水。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ yào hē shuǐ.",
              "answer": "我要喝水。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ xiǎng xué Zhōngwén.",
              "answer": "我想学中文。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ yào hē shuǐ. (3)",
              "answer": "我要喝水。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ xiǎng xué Zhōngwén. (4)",
              "answer": "我想学中文。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ yào hē shuǐ. (5)",
              "answer": "我要喝水。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 要",
              "answer": "要",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 想",
              "answer": "想",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 喝水",
              "answer": "喝水",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 要 (4)",
              "answer": "要",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 想 (5)",
              "answer": "想",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 要",
              "answer": "答案示例：我要喝水。",
              "required": [
                "要"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 想",
              "answer": "答案示例：我想学中文。",
              "required": [
                "想"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 喝水",
              "answer": "答案示例：我要喝水。",
              "required": [
                "喝水"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 买",
              "answer": "答案示例：我想学中文。",
              "required": [
                "买"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 学习",
              "answer": "答案示例：我要喝水。",
              "required": [
                "学习"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "想/要",
          "tokens": [
            "/",
            "想",
            "要"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我要回家。",
          "tokens": [
            "要",
            "家",
            "我",
            "回"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我想喝水。",
          "tokens": [
            "想",
            "水",
            "我",
            "喝"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันจะ/ต้องการดื่มน้ำ",
          "answer": "我要喝水。",
          "tokens": [
            "要",
            "水",
            "我",
            "喝"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันอยากเรียนจีน",
          "answer": "我想学中文。",
          "tokens": [
            "想",
            "中",
            "我",
            "学",
            "文"
          ]
        }
      ]
    },
    {
      "id": 11,
      "title": "了：完成或变化",
      "thaiTitle": "了: ทำเสร็จแล้วหรือเปลี่ยนแปลง",
      "formula": "动词 + 了 / 形容词 + 了",
      "thai": "บอกเสร็จแล้วหรือเปลี่ยนแปลง",
      "thaiExplanation": "了 ใช้ได้สองแนวใหญ่ คือบอกว่าเกิดหรือทำเสร็จแล้ว และบอกว่ามีสภาพใหม่เกิดขึ้น เช่น อากาศเย็นแล้ว",
      "tip": "“了”可表示动作完成，也可表示新情况出现。",
      "examples": [
        {
          "zh": "我吃饭了。",
          "pinyin": "Wǒ chī fàn le.",
          "thai": "ฉันกินข้าวแล้ว",
          "tone": "Wo3 chi1 fan4 le."
        },
        {
          "zh": "天气冷了。",
          "pinyin": "Tiānqì lěng le.",
          "thai": "อากาศหนาวแล้ว",
          "tone": "Tianqi4 leng3 le."
        }
      ],
      "words": [
        "了",
        "吃饭",
        "到了",
        "买",
        "冷",
        "下雨"
      ],
      "vocab": [
        {
          "word": "了",
          "pinyin": "le",
          "tone": "le",
          "thai": "แล้ว / เปลี่ยนสภาพ"
        },
        {
          "word": "吃饭",
          "pinyin": "chī fàn",
          "tone": "chi1 fan4",
          "thai": "กินข้าว"
        },
        {
          "word": "到了",
          "pinyin": "dào le",
          "tone": "dao4 le",
          "thai": "ถึงแล้ว"
        },
        {
          "word": "买",
          "pinyin": "mǎi",
          "tone": "mai3",
          "thai": "ซื้อ"
        },
        {
          "word": "冷",
          "pinyin": "lěng",
          "tone": "leng3",
          "thai": "หนาว / เย็น"
        },
        {
          "word": "下雨",
          "pinyin": "xià yǔ",
          "tone": "xia4 yu3",
          "thai": "ฝนตก"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 了 (le) แปลว่าอะไร?",
              "answer": "แล้ว / เปลี่ยนสภาพ",
              "mode": "choice",
              "options": [
                "กินข้าว",
                "ซื้อ",
                "แล้ว / เปลี่ยนสภาพ",
                "ถึงแล้ว"
              ]
            },
            {
              "prompt": "คำว่า 吃饭 (chī fàn) แปลว่าอะไร?",
              "answer": "กินข้าว",
              "mode": "choice",
              "options": [
                "แล้ว / เปลี่ยนสภาพ",
                "ซื้อ",
                "กินข้าว",
                "ถึงแล้ว"
              ]
            },
            {
              "prompt": "คำว่า 到了 (dào le) แปลว่าอะไร?",
              "answer": "ถึงแล้ว",
              "mode": "choice",
              "options": [
                "แล้ว / เปลี่ยนสภาพ",
                "ซื้อ",
                "ถึงแล้ว",
                "กินข้าว"
              ]
            },
            {
              "prompt": "คำว่า 买 (mǎi) แปลว่าอะไร?",
              "answer": "ซื้อ",
              "mode": "choice",
              "options": [
                "แล้ว / เปลี่ยนสภาพ",
                "ถึงแล้ว",
                "ซื้อ",
                "กินข้าว"
              ]
            },
            {
              "prompt": "คำไทย “แล้ว / เปลี่ยนสภาพ” ตรงกับคำจีนข้อใด?",
              "answer": "了",
              "mode": "choice",
              "options": [
                "吃饭",
                "买",
                "了",
                "到了"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 我吃饭__。",
              "answer": "了",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他到学校__。",
              "answer": "了",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 天气冷__。",
              "answer": "了",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我吃饭__。 (4)",
              "answer": "了",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他到学校__。 (5)",
              "answer": "了",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "เขียนใหม่ตามโจทย์",
          "prompts": [
            {
              "prompt": "เขียนใหม่ตามโจทย์: 我买书。-> 已完成",
              "answer": "我买书了。",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 下雨。-> 情况变化",
              "answer": "下雨了。",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 我买书。-> 已完成 (3)",
              "answer": "我买书了。",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 下雨。-> 情况变化 (4)",
              "answer": "下雨了。",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 我买书。-> 已完成 (5)",
              "answer": "我买书了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันกินข้าวแล้ว",
              "answer": "我吃饭了。",
              "mode": "exact"
            },
            {
              "prompt": "อากาศหนาวแล้ว",
              "answer": "天气冷了。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันกินข้าวแล้ว (3)",
              "answer": "我吃饭了。",
              "mode": "exact"
            },
            {
              "prompt": "อากาศหนาวแล้ว (4)",
              "answer": "天气冷了。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันกินข้าวแล้ว (5)",
              "answer": "我吃饭了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ chī fàn le.",
              "answer": "我吃饭了。",
              "mode": "exact"
            },
            {
              "prompt": "Tiānqì lěng le.",
              "answer": "天气冷了。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ chī fàn le. (3)",
              "answer": "我吃饭了。",
              "mode": "exact"
            },
            {
              "prompt": "Tiānqì lěng le. (4)",
              "answer": "天气冷了。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ chī fàn le. (5)",
              "answer": "我吃饭了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 了",
              "answer": "了",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 吃饭",
              "answer": "吃饭",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 到了",
              "answer": "到了",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 了 (4)",
              "answer": "了",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 吃饭 (5)",
              "answer": "吃饭",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 了",
              "answer": "答案示例：我吃饭了。",
              "required": [
                "了"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 吃饭",
              "answer": "答案示例：天气冷了。",
              "required": [
                "吃饭"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 到了",
              "answer": "答案示例：我吃饭了。",
              "required": [
                "到了"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 买",
              "answer": "答案示例：天气冷了。",
              "required": [
                "买"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 冷",
              "answer": "答案示例：我吃饭了。",
              "required": [
                "冷"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我买书了。",
          "tokens": [
            "买",
            "了",
            "我",
            "书"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "下雨了。",
          "tokens": [
            "雨",
            "下",
            "了"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันกินข้าวแล้ว",
          "answer": "我吃饭了。",
          "tokens": [
            "吃",
            "了",
            "我",
            "饭"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: อากาศหนาวแล้ว",
          "answer": "天气冷了。",
          "tokens": [
            "气",
            "了",
            "天",
            "冷"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "我买书了。",
          "tokens": [
            "买",
            "了",
            "我",
            "书"
          ]
        }
      ]
    },
    {
      "id": 12,
      "title": "过：经历",
      "thaiTitle": "过: เคยมีประสบการณ์",
      "formula": "主语 + 动词 + 过 + 宾语",
      "thai": "เคยทำมาก่อน",
      "thaiExplanation": "过 วางหลังกริยาเพื่อบอกว่าเคยทำสิ่งนั้นมาก่อนในอดีต ถ้าปฏิเสธใช้ 没 หรือ 没有 + กริยา + 过",
      "tip": "“过”表示过去有过某种经历；否定说“没/没有 + 动词 + 过”。",
      "examples": [
        {
          "zh": "我去过中国。",
          "pinyin": "Wǒ qù guo Zhōngguó.",
          "thai": "ฉันเคยไปประเทศจีน",
          "tone": "Wo3 qu4 guo Zhongguo2."
        },
        {
          "zh": "他没学过泰语。",
          "pinyin": "Tā méi xué guo Tàiyǔ.",
          "thai": "เขาไม่เคยเรียนภาษาไทย",
          "tone": "Ta1 mei2 xue2 guo Taiyu3."
        }
      ],
      "words": [
        "过",
        "去过",
        "吃过",
        "学过",
        "坐过",
        "没"
      ],
      "vocab": [
        {
          "word": "过",
          "pinyin": "guo",
          "tone": "guo",
          "thai": "เคย"
        },
        {
          "word": "去过",
          "pinyin": "qù guo",
          "tone": "qu4 guo",
          "thai": "เคยไป"
        },
        {
          "word": "吃过",
          "pinyin": "chī guo",
          "tone": "chi1 guo",
          "thai": "เคยกิน"
        },
        {
          "word": "学过",
          "pinyin": "xué guo",
          "tone": "xue2 guo",
          "thai": "เคยเรียน"
        },
        {
          "word": "坐过",
          "pinyin": "zuò guo",
          "tone": "zuo4 guo",
          "thai": "เคยนั่ง"
        },
        {
          "word": "没",
          "pinyin": "méi",
          "tone": "mei2",
          "thai": "ไม่ได้ / ไม่เคย"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 过 (guo) แปลว่าอะไร?",
              "answer": "เคย",
              "mode": "choice",
              "options": [
                "เคยไป",
                "เคยเรียน",
                "เคย",
                "เคยกิน"
              ]
            },
            {
              "prompt": "คำว่า 去过 (qù guo) แปลว่าอะไร?",
              "answer": "เคยไป",
              "mode": "choice",
              "options": [
                "เคย",
                "เคยเรียน",
                "เคยไป",
                "เคยกิน"
              ]
            },
            {
              "prompt": "คำว่า 吃过 (chī guo) แปลว่าอะไร?",
              "answer": "เคยกิน",
              "mode": "choice",
              "options": [
                "เคย",
                "เคยเรียน",
                "เคยกิน",
                "เคยไป"
              ]
            },
            {
              "prompt": "คำว่า 学过 (xué guo) แปลว่าอะไร?",
              "answer": "เคยเรียน",
              "mode": "choice",
              "options": [
                "เคย",
                "เคยกิน",
                "เคยเรียน",
                "เคยไป"
              ]
            },
            {
              "prompt": "คำไทย “เคย” ตรงกับคำจีนข้อใด?",
              "answer": "过",
              "mode": "choice",
              "options": [
                "去过",
                "学过",
                "过",
                "吃过"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 我去__中国。",
              "answer": "过",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 你吃__北京烤鸭吗？",
              "answer": "过",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他没学__泰语。",
              "answer": "过",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我去__中国。 (4)",
              "answer": "过",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 你吃__北京烤鸭吗？ (5)",
              "answer": "过",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "ตอบคำถามจากตัวอย่าง",
          "prompts": [
            {
              "prompt": "ตอบคำถามจากตัวอย่าง: 你去过中国吗？",
              "answer": "答案示例：我去过/没去过。",
              "mode": "exact"
            },
            {
              "prompt": "ตอบคำถามจากตัวอย่าง: 你坐过高铁吗？",
              "answer": "答案示例：我坐过/没坐过。",
              "mode": "exact"
            },
            {
              "prompt": "ตอบคำถามจากตัวอย่าง: 你去过中国吗？ (3)",
              "answer": "答案示例：我去过/没去过。",
              "mode": "exact"
            },
            {
              "prompt": "ตอบคำถามจากตัวอย่าง: 你坐过高铁吗？ (4)",
              "answer": "答案示例：我坐过/没坐过。",
              "mode": "exact"
            },
            {
              "prompt": "ตอบคำถามจากตัวอย่าง: 你去过中国吗？ (5)",
              "answer": "答案示例：我去过/没去过。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันเคยไปประเทศจีน",
              "answer": "我去过中国。",
              "mode": "exact"
            },
            {
              "prompt": "เขาไม่เคยเรียนภาษาไทย",
              "answer": "他没学过泰语。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันเคยไปประเทศจีน (3)",
              "answer": "我去过中国。",
              "mode": "exact"
            },
            {
              "prompt": "เขาไม่เคยเรียนภาษาไทย (4)",
              "answer": "他没学过泰语。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันเคยไปประเทศจีน (5)",
              "answer": "我去过中国。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ qù guo Zhōngguó.",
              "answer": "我去过中国。",
              "mode": "exact"
            },
            {
              "prompt": "Tā méi xué guo Tàiyǔ.",
              "answer": "他没学过泰语。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ qù guo Zhōngguó. (3)",
              "answer": "我去过中国。",
              "mode": "exact"
            },
            {
              "prompt": "Tā méi xué guo Tàiyǔ. (4)",
              "answer": "他没学过泰语。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ qù guo Zhōngguó. (5)",
              "answer": "我去过中国。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 过",
              "answer": "过",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 去过",
              "answer": "去过",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 吃过",
              "answer": "吃过",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 过 (4)",
              "answer": "过",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 去过 (5)",
              "answer": "去过",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 过",
              "answer": "答案示例：我去过中国。",
              "required": [
                "过"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 去过",
              "answer": "答案示例：他没学过泰语。",
              "required": [
                "去过"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 吃过",
              "answer": "答案示例：我去过中国。",
              "required": [
                "吃过"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 学过",
              "answer": "答案示例：他没学过泰语。",
              "required": [
                "学过"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 坐过",
              "answer": "答案示例：我去过中国。",
              "required": [
                "坐过"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我去过/没去过。",
          "tokens": [
            "去",
            "/",
            "去",
            "我",
            "过",
            "没",
            "过"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我坐过/没坐过。",
          "tokens": [
            "坐",
            "/",
            "坐",
            "我",
            "过",
            "没",
            "过"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันเคยไปประเทศจีน",
          "answer": "我去过中国。",
          "tokens": [
            "去",
            "中",
            "我",
            "过",
            "国"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขาไม่เคยเรียนภาษาไทย",
          "answer": "他没学过泰语。",
          "tokens": [
            "没",
            "过",
            "语",
            "他",
            "学",
            "泰"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "我去过/没去过。",
          "tokens": [
            "去",
            "/",
            "去",
            "我",
            "过",
            "没",
            "过"
          ]
        }
      ]
    },
    {
      "id": 13,
      "title": "如果……就……",
      "thaiTitle": "ถ้า...ก็... 如果……就……",
      "formula": "如果 + 条件，主语 + 就 + 结果",
      "thai": "ถ้า...ก็...",
      "thaiExplanation": "ใช้เชื่อมเงื่อนไขกับผลลัพธ์ คล้าย ถ้า...ก็... โดย 就 มักอยู่หน้าผลลัพธ์",
      "tip": "“就”常引出条件后的结果。",
      "examples": [
        {
          "zh": "如果明天下雨，我就不去爬山了。",
          "pinyin": "Rúguǒ míngtiān xiàyǔ, wǒ jiù bù qù páshān le.",
          "thai": "ถ้าพรุ่งนี้ฝนตก ฉันก็จะไม่ไปปีนเขา",
          "tone": "Ruguo3 mingtian1 xiayu3, wo3 jiu4 bu4 qu4 pashan1 le."
        },
        {
          "zh": "如果你有时间，就来我家。",
          "pinyin": "Rúguǒ nǐ yǒu shíjiān, jiù lái wǒ jiā.",
          "thai": "ถ้าคุณมีเวลา ก็มาบ้านฉัน",
          "tone": "Ruguo3 ni3 you3 shijian1, jiu4 lai2 wo3 jia1."
        }
      ],
      "words": [
        "如果",
        "就",
        "下雨",
        "有时间",
        "来",
        "不去"
      ],
      "vocab": [
        {
          "word": "如果",
          "pinyin": "rúguǒ",
          "tone": "ruguo3",
          "thai": "ถ้า"
        },
        {
          "word": "就",
          "pinyin": "jiù",
          "tone": "jiu4",
          "thai": "ก็ / ทันที / แค่"
        },
        {
          "word": "下雨",
          "pinyin": "xià yǔ",
          "tone": "xia4 yu3",
          "thai": "ฝนตก"
        },
        {
          "word": "有时间",
          "pinyin": "yǒu shíjiān",
          "tone": "you3 shijian1",
          "thai": "มีเวลา"
        },
        {
          "word": "来",
          "pinyin": "lái",
          "tone": "lai2",
          "thai": "มา"
        },
        {
          "word": "不去",
          "pinyin": "bù qù",
          "tone": "bu4 qu4",
          "thai": "ไม่ไป"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 如果 (rúguǒ) แปลว่าอะไร?",
              "answer": "ถ้า",
              "mode": "choice",
              "options": [
                "ก็ / ทันที / แค่",
                "มีเวลา",
                "ถ้า",
                "ฝนตก"
              ]
            },
            {
              "prompt": "คำว่า 就 (jiù) แปลว่าอะไร?",
              "answer": "ก็ / ทันที / แค่",
              "mode": "choice",
              "options": [
                "ถ้า",
                "มีเวลา",
                "ก็ / ทันที / แค่",
                "ฝนตก"
              ]
            },
            {
              "prompt": "คำว่า 下雨 (xià yǔ) แปลว่าอะไร?",
              "answer": "ฝนตก",
              "mode": "choice",
              "options": [
                "ถ้า",
                "มีเวลา",
                "ฝนตก",
                "ก็ / ทันที / แค่"
              ]
            },
            {
              "prompt": "คำว่า 有时间 (yǒu shíjiān) แปลว่าอะไร?",
              "answer": "มีเวลา",
              "mode": "choice",
              "options": [
                "ถ้า",
                "ฝนตก",
                "มีเวลา",
                "ก็ / ทันที / แค่"
              ]
            },
            {
              "prompt": "คำไทย “ถ้า” ตรงกับคำจีนข้อใด?",
              "answer": "如果",
              "mode": "choice",
              "options": [
                "就",
                "有时间",
                "如果",
                "下雨"
              ]
            }
          ]
        },
        {
          "type": "เชื่อมสองส่วนให้เป็นประโยค",
          "prompts": [
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 明天下雨 / 我不去",
              "answer": "如果明天下雨，我就不去。",
              "mode": "exact"
            },
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 你有时间 / 来我家",
              "answer": "如果你有时间，就来我家。",
              "mode": "exact"
            },
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 明天下雨 / 我不去 (3)",
              "answer": "如果明天下雨，我就不去。",
              "mode": "exact"
            },
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 你有时间 / 来我家 (4)",
              "answer": "如果你有时间，就来我家。",
              "mode": "exact"
            },
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 明天下雨 / 我不去 (5)",
              "answer": "如果明天下雨，我就不去。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: __明天放假，我__去旅行。",
              "answer": "如果，就",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: __你饿了，__吃饭。",
              "answer": "如果，就",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: __明天放假，我__去旅行。 (3)",
              "answer": "如果，就",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: __你饿了，__吃饭。 (4)",
              "answer": "如果，就",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: __明天放假，我__去旅行。 (5)",
              "answer": "如果，就",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ถ้าพรุ่งนี้ฝนตก ฉันก็จะไม่ไปปีนเขา",
              "answer": "如果明天下雨，我就不去爬山了。",
              "mode": "exact"
            },
            {
              "prompt": "ถ้าคุณมีเวลา ก็มาบ้านฉัน",
              "answer": "如果你有时间，就来我家。",
              "mode": "exact"
            },
            {
              "prompt": "ถ้าพรุ่งนี้ฝนตก ฉันก็จะไม่ไปปีนเขา (3)",
              "answer": "如果明天下雨，我就不去爬山了。",
              "mode": "exact"
            },
            {
              "prompt": "ถ้าคุณมีเวลา ก็มาบ้านฉัน (4)",
              "answer": "如果你有时间，就来我家。",
              "mode": "exact"
            },
            {
              "prompt": "ถ้าพรุ่งนี้ฝนตก ฉันก็จะไม่ไปปีนเขา (5)",
              "answer": "如果明天下雨，我就不去爬山了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Rúguǒ míngtiān xiàyǔ, wǒ jiù bù qù páshān le.",
              "answer": "如果明天下雨，我就不去爬山了。",
              "mode": "exact"
            },
            {
              "prompt": "Rúguǒ nǐ yǒu shíjiān, jiù lái wǒ jiā.",
              "answer": "如果你有时间，就来我家。",
              "mode": "exact"
            },
            {
              "prompt": "Rúguǒ míngtiān xiàyǔ, wǒ jiù bù qù páshān le. (3)",
              "answer": "如果明天下雨，我就不去爬山了。",
              "mode": "exact"
            },
            {
              "prompt": "Rúguǒ nǐ yǒu shíjiān, jiù lái wǒ jiā. (4)",
              "answer": "如果你有时间，就来我家。",
              "mode": "exact"
            },
            {
              "prompt": "Rúguǒ míngtiān xiàyǔ, wǒ jiù bù qù páshān le. (5)",
              "answer": "如果明天下雨，我就不去爬山了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 如果",
              "answer": "如果",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 就",
              "answer": "就",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 下雨",
              "answer": "下雨",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 如果 (4)",
              "answer": "如果",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 就 (5)",
              "answer": "就",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 如果",
              "answer": "答案示例：如果明天下雨，我就不去爬山了。",
              "required": [
                "如果"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 就",
              "answer": "答案示例：如果你有时间，就来我家。",
              "required": [
                "就"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 下雨",
              "answer": "答案示例：如果明天下雨，我就不去爬山了。",
              "required": [
                "下雨"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 有时间",
              "answer": "答案示例：如果你有时间，就来我家。",
              "required": [
                "有时间"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 来",
              "answer": "答案示例：如果明天下雨，我就不去爬山了。",
              "required": [
                "来"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "如果，就",
          "tokens": [
            "果",
            "如",
            "就"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ถ้าพรุ่งนี้ฝนตก ฉันก็จะไม่ไปปีนเขา",
          "answer": "如果明天下雨，我就不去爬山了。",
          "tokens": [
            "果",
            "天",
            "雨",
            "就",
            "去",
            "山",
            "如",
            "明",
            "下",
            "我",
            "不",
            "爬",
            "了"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ถ้าคุณมีเวลา ก็มาบ้านฉัน",
          "answer": "如果你有时间，就来我家。",
          "tokens": [
            "果",
            "有",
            "间",
            "来",
            "家",
            "如",
            "你",
            "时",
            "就",
            "我"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (4)",
          "answer": "如果，就",
          "tokens": [
            "果",
            "如",
            "就"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ถ้าพรุ่งนี้ฝนตก ฉันก็จะไม่ไปปีนเขา (5)",
          "answer": "如果明天下雨，我就不去爬山了。",
          "tokens": [
            "果",
            "天",
            "雨",
            "就",
            "去",
            "山",
            "如",
            "明",
            "下",
            "我",
            "不",
            "爬",
            "了"
          ]
        }
      ]
    },
    {
      "id": 14,
      "title": "不 / 没",
      "thaiTitle": "不 / 没: วิธีปฏิเสธ",
      "formula": "不 + 现在/习惯/将来 / 没 + 过去完成或有",
      "thai": "不 ปฏิเสธทั่วไป / 没 ปฏิเสธอดีตหรือ 有",
      "thaiExplanation": "不 ใช้ปฏิเสธทั่วไป ปัจจุบัน อนาคต หรือความเคยชิน ส่วน 没 ใช้กับเหตุการณ์ที่ยังไม่เกิด/ไม่ได้ทำ และใช้กับ 有",
      "tip": "动作未发生多用“没”；否定“有”也用“没”。",
      "examples": [
        {
          "zh": "我不吃辣。",
          "pinyin": "Wǒ bù chī là.",
          "thai": "ฉันไม่กินเผ็ด",
          "tone": "Wo3 bu4 chi1 la4."
        },
        {
          "zh": "我没吃早饭。",
          "pinyin": "Wǒ méi chī zǎofàn.",
          "thai": "ฉันยังไม่ได้กินอาหารเช้า",
          "tone": "Wo3 mei2 chi1 zaofan4."
        }
      ],
      "words": [
        "不",
        "没",
        "没有",
        "吃",
        "去",
        "有"
      ],
      "vocab": [
        {
          "word": "不",
          "pinyin": "bù",
          "tone": "bu4",
          "thai": "ไม่"
        },
        {
          "word": "没",
          "pinyin": "méi",
          "tone": "mei2",
          "thai": "ไม่ได้ / ไม่เคย"
        },
        {
          "word": "没有",
          "pinyin": "méiyǒu",
          "tone": "meiyou3",
          "thai": "ไม่มี"
        },
        {
          "word": "吃",
          "pinyin": "chī",
          "tone": "chi1",
          "thai": "กิน"
        },
        {
          "word": "去",
          "pinyin": "qù",
          "tone": "qu4",
          "thai": "ไป"
        },
        {
          "word": "有",
          "pinyin": "yǒu",
          "tone": "you3",
          "thai": "มี"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 不 (bù) แปลว่าอะไร?",
              "answer": "ไม่",
              "mode": "choice",
              "options": [
                "ไม่ได้ / ไม่เคย",
                "กิน",
                "ไม่",
                "ไม่มี"
              ]
            },
            {
              "prompt": "คำว่า 没 (méi) แปลว่าอะไร?",
              "answer": "ไม่ได้ / ไม่เคย",
              "mode": "choice",
              "options": [
                "ไม่",
                "กิน",
                "ไม่ได้ / ไม่เคย",
                "ไม่มี"
              ]
            },
            {
              "prompt": "คำว่า 没有 (méiyǒu) แปลว่าอะไร?",
              "answer": "ไม่มี",
              "mode": "choice",
              "options": [
                "ไม่",
                "กิน",
                "ไม่มี",
                "ไม่ได้ / ไม่เคย"
              ]
            },
            {
              "prompt": "คำว่า 吃 (chī) แปลว่าอะไร?",
              "answer": "กิน",
              "mode": "choice",
              "options": [
                "ไม่",
                "ไม่มี",
                "กิน",
                "ไม่ได้ / ไม่เคย"
              ]
            },
            {
              "prompt": "คำไทย “ไม่” ตรงกับคำจีนข้อใด?",
              "answer": "不",
              "mode": "choice",
              "options": [
                "没",
                "吃",
                "不",
                "没有"
              ]
            }
          ]
        },
        {
          "type": "เลือกคำตอบที่ถูกต้อง",
          "prompts": [
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__喜欢咖啡。",
              "answer": "不",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 他昨天__来。",
              "answer": "没",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__有钱。",
              "answer": "没",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__喜欢咖啡。 (4)",
              "answer": "不",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 他昨天__来。 (5)",
              "answer": "没",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แก้ประโยคผิด",
          "prompts": [
            {
              "prompt": "แก้ประโยคผิด: 我不有手机。",
              "answer": "我没有手机。",
              "mode": "exact"
            },
            {
              "prompt": "แก้ประโยคผิด: 他昨天不去学校。",
              "answer": "他昨天没去学校。",
              "mode": "exact"
            },
            {
              "prompt": "แก้ประโยคผิด: 我不有手机。 (3)",
              "answer": "我没有手机。",
              "mode": "exact"
            },
            {
              "prompt": "แก้ประโยคผิด: 他昨天不去学校。 (4)",
              "answer": "他昨天没去学校。",
              "mode": "exact"
            },
            {
              "prompt": "แก้ประโยคผิด: 我不有手机。 (5)",
              "answer": "我没有手机。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันไม่กินเผ็ด",
              "answer": "我不吃辣。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันยังไม่ได้กินอาหารเช้า",
              "answer": "我没吃早饭。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันไม่กินเผ็ด (3)",
              "answer": "我不吃辣。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันยังไม่ได้กินอาหารเช้า (4)",
              "answer": "我没吃早饭。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันไม่กินเผ็ด (5)",
              "answer": "我不吃辣。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ bù chī là.",
              "answer": "我不吃辣。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ méi chī zǎofàn.",
              "answer": "我没吃早饭。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ bù chī là. (3)",
              "answer": "我不吃辣。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ méi chī zǎofàn. (4)",
              "answer": "我没吃早饭。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ bù chī là. (5)",
              "answer": "我不吃辣。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 不",
              "answer": "不",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 没",
              "answer": "没",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 没有",
              "answer": "没有",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 不 (4)",
              "answer": "不",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 没 (5)",
              "answer": "没",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 不",
              "answer": "答案示例：我不吃辣。",
              "required": [
                "不"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 没",
              "answer": "答案示例：我没吃早饭。",
              "required": [
                "没"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 没有",
              "answer": "答案示例：我不吃辣。",
              "required": [
                "没有"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 吃",
              "answer": "答案示例：我没吃早饭。",
              "required": [
                "吃"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 去",
              "answer": "答案示例：我不吃辣。",
              "required": [
                "去"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我没有手机。",
          "tokens": [
            "没",
            "手",
            "我",
            "有",
            "机"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他昨天没去学校。",
          "tokens": [
            "昨",
            "没",
            "学",
            "他",
            "天",
            "去",
            "校"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันไม่กินเผ็ด",
          "answer": "我不吃辣。",
          "tokens": [
            "不",
            "辣",
            "我",
            "吃"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันยังไม่ได้กินอาหารเช้า",
          "answer": "我没吃早饭。",
          "tokens": [
            "没",
            "早",
            "我",
            "吃",
            "饭"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "我没有手机。",
          "tokens": [
            "没",
            "手",
            "我",
            "有",
            "机"
          ]
        }
      ]
    },
    {
      "id": 15,
      "title": "把字句",
      "thaiTitle": "ประโยค 把",
      "formula": "主语 + 把 + 宾语 + 动词 + 结果",
      "thai": "เน้นการจัดการกับกรรมและผลลัพธ์",
      "thaiExplanation": "把 นำกรรมขึ้นมาก่อนกริยาเพื่อเน้นว่าผู้พูดจัดการกับสิ่งนั้นจนเกิดผลบางอย่าง ด้านหลังกริยามักต้องมีผลลัพธ์",
      "tip": "“把”把宾语提前，后面通常要有结果或方向补语。",
      "examples": [
        {
          "zh": "我把书放在桌子上了。",
          "pinyin": "Wǒ bǎ shū fàng zài zhuōzi shàng le.",
          "thai": "ฉันวางหนังสือไว้บนโต๊ะแล้ว",
          "tone": "Wo3 ba3 shu1 fang4 zai4 zhuozi1 shang4 le."
        },
        {
          "zh": "请把门关上。",
          "pinyin": "Qǐng bǎ mén guān shàng.",
          "thai": "กรุณาปิดประตู",
          "tone": "Qing3 ba3 men2 guan1 shang4."
        }
      ],
      "words": [
        "把",
        "书",
        "门",
        "放",
        "关上",
        "打开"
      ],
      "vocab": [
        {
          "word": "把",
          "pinyin": "bǎ",
          "tone": "ba3",
          "thai": "เอา...ไปจัดการ"
        },
        {
          "word": "书",
          "pinyin": "shū",
          "tone": "shu1",
          "thai": "หนังสือ"
        },
        {
          "word": "门",
          "pinyin": "mén",
          "tone": "men2",
          "thai": "ประตู"
        },
        {
          "word": "放",
          "pinyin": "fàng",
          "tone": "fang4",
          "thai": "วาง / ใส่"
        },
        {
          "word": "关上",
          "pinyin": "guān shàng",
          "tone": "guan1 shang4",
          "thai": "ปิดให้สนิท"
        },
        {
          "word": "打开",
          "pinyin": "dǎ kāi",
          "tone": "da3 kai1",
          "thai": "เปิดออก"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 把 (bǎ) แปลว่าอะไร?",
              "answer": "เอา...ไปจัดการ",
              "mode": "choice",
              "options": [
                "หนังสือ",
                "วาง / ใส่",
                "เอา...ไปจัดการ",
                "ประตู"
              ]
            },
            {
              "prompt": "คำว่า 书 (shū) แปลว่าอะไร?",
              "answer": "หนังสือ",
              "mode": "choice",
              "options": [
                "เอา...ไปจัดการ",
                "วาง / ใส่",
                "หนังสือ",
                "ประตู"
              ]
            },
            {
              "prompt": "คำว่า 门 (mén) แปลว่าอะไร?",
              "answer": "ประตู",
              "mode": "choice",
              "options": [
                "เอา...ไปจัดการ",
                "วาง / ใส่",
                "ประตู",
                "หนังสือ"
              ]
            },
            {
              "prompt": "คำว่า 放 (fàng) แปลว่าอะไร?",
              "answer": "วาง / ใส่",
              "mode": "choice",
              "options": [
                "เอา...ไปจัดการ",
                "ประตู",
                "วาง / ใส่",
                "หนังสือ"
              ]
            },
            {
              "prompt": "คำไทย “เอา...ไปจัดการ” ตรงกับคำจีนข้อใด?",
              "answer": "把",
              "mode": "choice",
              "options": [
                "书",
                "放",
                "把",
                "门"
              ]
            }
          ]
        },
        {
          "type": "เขียนใหม่ตามโจทย์",
          "prompts": [
            {
              "prompt": "เขียนใหม่ตามโจทย์: 我关上门。",
              "answer": "我把门关上。",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 他放好手机。",
              "answer": "他把手机放好。",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 我关上门。 (3)",
              "answer": "我把门关上。",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 他放好手机。 (4)",
              "answer": "他把手机放好。",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 我关上门。 (5)",
              "answer": "我把门关上。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 请__书放在桌子上。",
              "answer": "把",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__作业写完了。",
              "answer": "把",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 请__书放在桌子上。 (3)",
              "answer": "把",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__作业写完了。 (4)",
              "answer": "把",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 请__书放在桌子上。 (5)",
              "answer": "把",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันวางหนังสือไว้บนโต๊ะแล้ว",
              "answer": "我把书放在桌子上了。",
              "mode": "exact"
            },
            {
              "prompt": "กรุณาปิดประตู",
              "answer": "请把门关上。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันวางหนังสือไว้บนโต๊ะแล้ว (3)",
              "answer": "我把书放在桌子上了。",
              "mode": "exact"
            },
            {
              "prompt": "กรุณาปิดประตู (4)",
              "answer": "请把门关上。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันวางหนังสือไว้บนโต๊ะแล้ว (5)",
              "answer": "我把书放在桌子上了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ bǎ shū fàng zài zhuōzi shàng le.",
              "answer": "我把书放在桌子上了。",
              "mode": "exact"
            },
            {
              "prompt": "Qǐng bǎ mén guān shàng.",
              "answer": "请把门关上。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ bǎ shū fàng zài zhuōzi shàng le. (3)",
              "answer": "我把书放在桌子上了。",
              "mode": "exact"
            },
            {
              "prompt": "Qǐng bǎ mén guān shàng. (4)",
              "answer": "请把门关上。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ bǎ shū fàng zài zhuōzi shàng le. (5)",
              "answer": "我把书放在桌子上了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 把",
              "answer": "把",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 书",
              "answer": "书",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 门",
              "answer": "门",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 把 (4)",
              "answer": "把",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 书 (5)",
              "answer": "书",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 把",
              "answer": "答案示例：我把书放在桌子上了。",
              "required": [
                "把"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 书",
              "answer": "答案示例：请把门关上。",
              "required": [
                "书"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 门",
              "answer": "答案示例：我把书放在桌子上了。",
              "required": [
                "门"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 放",
              "answer": "答案示例：请把门关上。",
              "required": [
                "放"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 关上",
              "answer": "答案示例：我把书放在桌子上了。",
              "required": [
                "关上"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我把门关上。",
          "tokens": [
            "把",
            "关",
            "我",
            "门",
            "上"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他把手机放好。",
          "tokens": [
            "把",
            "机",
            "好",
            "他",
            "手",
            "放"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันวางหนังสือไว้บนโต๊ะแล้ว",
          "answer": "我把书放在桌子上了。",
          "tokens": [
            "把",
            "放",
            "桌",
            "上",
            "我",
            "书",
            "在",
            "子",
            "了"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: กรุณาปิดประตู",
          "answer": "请把门关上。",
          "tokens": [
            "把",
            "关",
            "请",
            "门",
            "上"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "我把门关上。",
          "tokens": [
            "把",
            "关",
            "我",
            "门",
            "上"
          ]
        }
      ]
    },
    {
      "id": 16,
      "title": "被字句",
      "thaiTitle": "ประโยค 被",
      "formula": "宾语 + 被 + 施事者 + 动词 + 结果",
      "thai": "ถูก / โดน",
      "thaiExplanation": "被 ใช้เหมือน ถูก/โดน เพื่อเน้นผู้หรือสิ่งที่ได้รับผลจากการกระทำ มักใช้กับเหตุการณ์ที่มีผลชัดเจน",
      "tip": "“被”强调受事者受到动作影响，常带结果。",
      "examples": [
        {
          "zh": "手机被摔坏了。",
          "pinyin": "Shǒujī bèi shuāi huài le.",
          "thai": "โทรศัพท์ถูกทำตกจนเสีย",
          "tone": "Shouji1 bei4 shuai1 huai4 le."
        },
        {
          "zh": "衣服被洗干净了。",
          "pinyin": "Yīfu bèi xǐ gānjìng le.",
          "thai": "เสื้อผ้าถูกซักจนสะอาด",
          "tone": "Yifu1 bei4 xi3 ganjing4 le."
        }
      ],
      "words": [
        "被",
        "谁",
        "摔坏",
        "洗干净",
        "弄丢",
        "骂"
      ],
      "vocab": [
        {
          "word": "被",
          "pinyin": "bèi",
          "tone": "bei4",
          "thai": "ถูก / โดน"
        },
        {
          "word": "谁",
          "pinyin": "shéi",
          "tone": "shei2",
          "thai": "ใคร"
        },
        {
          "word": "摔坏",
          "pinyin": "shuāi huài",
          "tone": "shuai1 huai4",
          "thai": "ทำตกจนเสีย"
        },
        {
          "word": "洗干净",
          "pinyin": "xǐ gānjìng",
          "tone": "xi3 ganjing4",
          "thai": "ซัก/ล้างจนสะอาด"
        },
        {
          "word": "弄丢",
          "pinyin": "nòng diū",
          "tone": "nong4 diu1",
          "thai": "ทำหาย"
        },
        {
          "word": "骂",
          "pinyin": "mà",
          "tone": "ma4",
          "thai": "ดุ / ด่า"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 被 (bèi) แปลว่าอะไร?",
              "answer": "ถูก / โดน",
              "mode": "choice",
              "options": [
                "ใคร",
                "ซัก/ล้างจนสะอาด",
                "ถูก / โดน",
                "ทำตกจนเสีย"
              ]
            },
            {
              "prompt": "คำว่า 谁 (shéi) แปลว่าอะไร?",
              "answer": "ใคร",
              "mode": "choice",
              "options": [
                "ถูก / โดน",
                "ซัก/ล้างจนสะอาด",
                "ใคร",
                "ทำตกจนเสีย"
              ]
            },
            {
              "prompt": "คำว่า 摔坏 (shuāi huài) แปลว่าอะไร?",
              "answer": "ทำตกจนเสีย",
              "mode": "choice",
              "options": [
                "ถูก / โดน",
                "ซัก/ล้างจนสะอาด",
                "ทำตกจนเสีย",
                "ใคร"
              ]
            },
            {
              "prompt": "คำว่า 洗干净 (xǐ gānjìng) แปลว่าอะไร?",
              "answer": "ซัก/ล้างจนสะอาด",
              "mode": "choice",
              "options": [
                "ถูก / โดน",
                "ทำตกจนเสีย",
                "ซัก/ล้างจนสะอาด",
                "ใคร"
              ]
            },
            {
              "prompt": "คำไทย “ถูก / โดน” ตรงกับคำจีนข้อใด?",
              "answer": "被",
              "mode": "choice",
              "options": [
                "谁",
                "洗干净",
                "被",
                "摔坏"
              ]
            }
          ]
        },
        {
          "type": "เขียนใหม่ตามโจทย์",
          "prompts": [
            {
              "prompt": "เขียนใหม่ตามโจทย์: 他摔坏了手机。",
              "answer": "手机被他摔坏了。",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 妈妈洗干净了衣服。",
              "answer": "衣服被妈妈洗干净了。",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 他摔坏了手机。 (3)",
              "answer": "手机被他摔坏了。",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 妈妈洗干净了衣服。 (4)",
              "answer": "衣服被妈妈洗干净了。",
              "mode": "exact"
            },
            {
              "prompt": "เขียนใหม่ตามโจทย์: 他摔坏了手机。 (5)",
              "answer": "手机被他摔坏了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 手机__摔坏了。",
              "answer": "被",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__谁骂了？",
              "answer": "被",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 手机__摔坏了。 (3)",
              "answer": "被",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__谁骂了？ (4)",
              "answer": "被",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 手机__摔坏了。 (5)",
              "answer": "被",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "โทรศัพท์ถูกทำตกจนเสีย",
              "answer": "手机被摔坏了。",
              "mode": "exact"
            },
            {
              "prompt": "เสื้อผ้าถูกซักจนสะอาด",
              "answer": "衣服被洗干净了。",
              "mode": "exact"
            },
            {
              "prompt": "โทรศัพท์ถูกทำตกจนเสีย (3)",
              "answer": "手机被摔坏了。",
              "mode": "exact"
            },
            {
              "prompt": "เสื้อผ้าถูกซักจนสะอาด (4)",
              "answer": "衣服被洗干净了。",
              "mode": "exact"
            },
            {
              "prompt": "โทรศัพท์ถูกทำตกจนเสีย (5)",
              "answer": "手机被摔坏了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Shǒujī bèi shuāi huài le.",
              "answer": "手机被摔坏了。",
              "mode": "exact"
            },
            {
              "prompt": "Yīfu bèi xǐ gānjìng le.",
              "answer": "衣服被洗干净了。",
              "mode": "exact"
            },
            {
              "prompt": "Shǒujī bèi shuāi huài le. (3)",
              "answer": "手机被摔坏了。",
              "mode": "exact"
            },
            {
              "prompt": "Yīfu bèi xǐ gānjìng le. (4)",
              "answer": "衣服被洗干净了。",
              "mode": "exact"
            },
            {
              "prompt": "Shǒujī bèi shuāi huài le. (5)",
              "answer": "手机被摔坏了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 被",
              "answer": "被",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 谁",
              "answer": "谁",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 摔坏",
              "answer": "摔坏",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 被 (4)",
              "answer": "被",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 谁 (5)",
              "answer": "谁",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 被",
              "answer": "答案示例：手机被摔坏了。",
              "required": [
                "被"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 谁",
              "answer": "答案示例：衣服被洗干净了。",
              "required": [
                "谁"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 摔坏",
              "answer": "答案示例：手机被摔坏了。",
              "required": [
                "摔坏"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 洗干净",
              "answer": "答案示例：衣服被洗干净了。",
              "required": [
                "洗干净"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 弄丢",
              "answer": "答案示例：手机被摔坏了。",
              "required": [
                "弄丢"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "手机被他摔坏了。",
          "tokens": [
            "机",
            "他",
            "坏",
            "手",
            "被",
            "摔",
            "了"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "衣服被妈妈洗干净了。",
          "tokens": [
            "服",
            "妈",
            "洗",
            "净",
            "衣",
            "被",
            "妈",
            "干",
            "了"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: โทรศัพท์ถูกทำตกจนเสีย",
          "answer": "手机被摔坏了。",
          "tokens": [
            "机",
            "摔",
            "了",
            "手",
            "被",
            "坏"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เสื้อผ้าถูกซักจนสะอาด",
          "answer": "衣服被洗干净了。",
          "tokens": [
            "服",
            "洗",
            "净",
            "衣",
            "被",
            "干",
            "了"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "手机被他摔坏了。",
          "tokens": [
            "机",
            "他",
            "坏",
            "手",
            "被",
            "摔",
            "了"
          ]
        }
      ]
    },
    {
      "id": 17,
      "title": "再 / 又 / 还 / 都 / 才",
      "thaiTitle": "กลุ่มคำวิเศษณ์ 再 / 又 / 还 / 都 / 才",
      "formula": "再=again future / 又=again past / 还=still / 都=all / 才=only then",
      "thai": "กลุ่มคำวิเศษณ์ที่ใช้บ่อย",
      "thaiExplanation": "กลุ่มคำวิเศษณ์นี้ต้องจำความหมายและเวลาให้ดี: 再 อนาคตอีกครั้ง, 又 เกิดซ้ำแล้ว, 还 ยัง, 都 ทั้งหมด, 才 เพิ่งหรือแค่",
      "tip": "这些副词位置通常在动词前，意义差别很大。",
      "examples": [
        {
          "zh": "我明天再来。",
          "pinyin": "Wǒ míngtiān zài lái.",
          "thai": "ฉันพรุ่งนี้ค่อยมาอีก",
          "tone": "Wo3 mingtian1 zai4 lai2."
        },
        {
          "zh": "他又迟到了。",
          "pinyin": "Tā yòu chídào le.",
          "thai": "เขาสายอีกแล้ว",
          "tone": "Ta1 you4 chidao4 le."
        },
        {
          "zh": "我才到。",
          "pinyin": "Wǒ cái dào.",
          "thai": "ฉันเพิ่งมาถึง",
          "tone": "Wo3 cai2 dao4."
        }
      ],
      "words": [
        "再",
        "又",
        "还",
        "都",
        "才"
      ],
      "vocab": [
        {
          "word": "再",
          "pinyin": "zài",
          "tone": "zai4",
          "thai": "อีกครั้งในอนาคต"
        },
        {
          "word": "又",
          "pinyin": "yòu",
          "tone": "you4",
          "thai": "อีกแล้ว"
        },
        {
          "word": "还",
          "pinyin": "hái",
          "tone": "hai2",
          "thai": "ยัง / ยังมี"
        },
        {
          "word": "都",
          "pinyin": "dōu",
          "tone": "dou1",
          "thai": "ทั้งหมด"
        },
        {
          "word": "才",
          "pinyin": "cái",
          "tone": "cai2",
          "thai": "เพิ่ง / แค่"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 再 (zài) แปลว่าอะไร?",
              "answer": "อีกครั้งในอนาคต",
              "mode": "choice",
              "options": [
                "อีกแล้ว",
                "ทั้งหมด",
                "อีกครั้งในอนาคต",
                "ยัง / ยังมี"
              ]
            },
            {
              "prompt": "คำว่า 又 (yòu) แปลว่าอะไร?",
              "answer": "อีกแล้ว",
              "mode": "choice",
              "options": [
                "อีกครั้งในอนาคต",
                "ทั้งหมด",
                "อีกแล้ว",
                "ยัง / ยังมี"
              ]
            },
            {
              "prompt": "คำว่า 还 (hái) แปลว่าอะไร?",
              "answer": "ยัง / ยังมี",
              "mode": "choice",
              "options": [
                "อีกครั้งในอนาคต",
                "ทั้งหมด",
                "ยัง / ยังมี",
                "อีกแล้ว"
              ]
            },
            {
              "prompt": "คำว่า 都 (dōu) แปลว่าอะไร?",
              "answer": "ทั้งหมด",
              "mode": "choice",
              "options": [
                "อีกครั้งในอนาคต",
                "ยัง / ยังมี",
                "ทั้งหมด",
                "อีกแล้ว"
              ]
            },
            {
              "prompt": "คำไทย “อีกครั้งในอนาคต” ตรงกับคำจีนข้อใด?",
              "answer": "再",
              "mode": "choice",
              "options": [
                "又",
                "都",
                "再",
                "还"
              ]
            }
          ]
        },
        {
          "type": "เลือกคำตอบที่ถูกต้อง",
          "prompts": [
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 明天__说。",
              "answer": "再",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 他昨天__来了。",
              "answer": "又",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 大家__到了。",
              "answer": "都",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我现在__没吃饭。",
              "answer": "还",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 明天__说。 (5)",
              "answer": "再",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันเพิ่งมาถึง",
              "answer": "我才到。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขายังเรียนอยู่",
              "answer": "他还在学习。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันเพิ่งมาถึง (3)",
              "answer": "我才到。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขายังเรียนอยู่ (4)",
              "answer": "他还在学习。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันเพิ่งมาถึง (5)",
              "answer": "我才到。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันพรุ่งนี้ค่อยมาอีก",
              "answer": "我明天再来。",
              "mode": "exact"
            },
            {
              "prompt": "เขาสายอีกแล้ว",
              "answer": "他又迟到了。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันเพิ่งมาถึง",
              "answer": "我才到。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันพรุ่งนี้ค่อยมาอีก (4)",
              "answer": "我明天再来。",
              "mode": "exact"
            },
            {
              "prompt": "เขาสายอีกแล้ว (5)",
              "answer": "他又迟到了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ míngtiān zài lái.",
              "answer": "我明天再来。",
              "mode": "exact"
            },
            {
              "prompt": "Tā yòu chídào le.",
              "answer": "他又迟到了。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ cái dào.",
              "answer": "我才到。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ míngtiān zài lái. (4)",
              "answer": "我明天再来。",
              "mode": "exact"
            },
            {
              "prompt": "Tā yòu chídào le. (5)",
              "answer": "他又迟到了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 再",
              "answer": "再",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 又",
              "answer": "又",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 还",
              "answer": "还",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 再 (4)",
              "answer": "再",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 又 (5)",
              "answer": "又",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 再",
              "answer": "答案示例：我明天再来。",
              "required": [
                "再"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 又",
              "answer": "答案示例：他又迟到了。",
              "required": [
                "又"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 还",
              "answer": "答案示例：我才到。",
              "required": [
                "还"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 都",
              "answer": "答案示例：我明天再来。",
              "required": [
                "都"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 才",
              "answer": "答案示例：他又迟到了。",
              "required": [
                "才"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我才到。",
          "tokens": [
            "才",
            "我",
            "到"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他还在学习。",
          "tokens": [
            "还",
            "学",
            "他",
            "在",
            "习"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันพรุ่งนี้ค่อยมาอีก",
          "answer": "我明天再来。",
          "tokens": [
            "明",
            "再",
            "我",
            "天",
            "来"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขาสายอีกแล้ว",
          "answer": "他又迟到了。",
          "tokens": [
            "又",
            "到",
            "他",
            "迟",
            "了"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "我才到。",
          "tokens": [
            "才",
            "我",
            "到"
          ]
        }
      ]
    },
    {
      "id": 18,
      "title": "向 / 给 / 跟 / 对",
      "thaiTitle": "บุพบท 向 / 给 / 跟 / 对",
      "formula": "介词 + 人/方向 + 动作",
      "thai": "向 ไปทาง/ต่อ / 给 ให้ / 跟 กับ / 对 ต่อ",
      "thaiExplanation": "คำเหล่านี้ใช้บอกทิศทาง ผู้รับ ผู้ร่วมกระทำ หรือเป้าหมายของการพูด/การกระทำ ตำแหน่งมักอยู่ก่อนกริยา",
      "tip": "这些介词常用于动作对象或方向。",
      "examples": [
        {
          "zh": "我给你打电话。",
          "pinyin": "Wǒ gěi nǐ dǎ diànhuà.",
          "thai": "ฉันโทรหาคุณ",
          "tone": "Wo3 gei3 ni3 da3 dianhua4."
        },
        {
          "zh": "他跟朋友聊天。",
          "pinyin": "Tā gēn péngyou liáotiān.",
          "thai": "เขาคุยกับเพื่อน",
          "tone": "Ta1 gen1 pengyou2 liaotian1."
        },
        {
          "zh": "请向左走。",
          "pinyin": "Qǐng xiàng zuǒ zǒu.",
          "thai": "กรุณาเดินไปทางซ้าย",
          "tone": "Qing3 xiang4 zuo3 zou3."
        }
      ],
      "words": [
        "向",
        "给",
        "跟",
        "对",
        "朋友",
        "左"
      ],
      "vocab": [
        {
          "word": "向",
          "pinyin": "xiàng",
          "tone": "xiang4",
          "thai": "ไปทาง / ต่อ"
        },
        {
          "word": "给",
          "pinyin": "gěi",
          "tone": "gei3",
          "thai": "ให้ / ให้แก่"
        },
        {
          "word": "跟",
          "pinyin": "gēn",
          "tone": "gen1",
          "thai": "กับ / ตาม"
        },
        {
          "word": "对",
          "pinyin": "duì",
          "tone": "dui4",
          "thai": "ต่อ / กับ"
        },
        {
          "word": "朋友",
          "pinyin": "péngyou",
          "tone": "pengyou2",
          "thai": "เพื่อน"
        },
        {
          "word": "左",
          "pinyin": "zuǒ",
          "tone": "zuo3",
          "thai": "ซ้าย"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 向 (xiàng) แปลว่าอะไร?",
              "answer": "ไปทาง / ต่อ",
              "mode": "choice",
              "options": [
                "ให้ / ให้แก่",
                "ต่อ / กับ",
                "ไปทาง / ต่อ",
                "กับ / ตาม"
              ]
            },
            {
              "prompt": "คำว่า 给 (gěi) แปลว่าอะไร?",
              "answer": "ให้ / ให้แก่",
              "mode": "choice",
              "options": [
                "ไปทาง / ต่อ",
                "ต่อ / กับ",
                "ให้ / ให้แก่",
                "กับ / ตาม"
              ]
            },
            {
              "prompt": "คำว่า 跟 (gēn) แปลว่าอะไร?",
              "answer": "กับ / ตาม",
              "mode": "choice",
              "options": [
                "ไปทาง / ต่อ",
                "ต่อ / กับ",
                "กับ / ตาม",
                "ให้ / ให้แก่"
              ]
            },
            {
              "prompt": "คำว่า 对 (duì) แปลว่าอะไร?",
              "answer": "ต่อ / กับ",
              "mode": "choice",
              "options": [
                "ไปทาง / ต่อ",
                "กับ / ตาม",
                "ต่อ / กับ",
                "ให้ / ให้แก่"
              ]
            },
            {
              "prompt": "คำไทย “ไปทาง / ต่อ” ตรงกับคำจีนข้อใด?",
              "answer": "向",
              "mode": "choice",
              "options": [
                "给",
                "对",
                "向",
                "跟"
              ]
            }
          ]
        },
        {
          "type": "เลือกคำตอบที่ถูกต้อง",
          "prompts": [
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__你打电话。",
              "answer": "给",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 他__朋友吃饭。",
              "answer": "跟",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 请__右走。",
              "answer": "向",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 老师__学生说话。",
              "answer": "对",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__你打电话。 (5)",
              "answer": "给",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยค",
          "prompts": [
            {
              "prompt": "แต่งประโยค: 给",
              "answer": "答案示例：我给他发信息。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 跟",
              "answer": "答案示例：我跟朋友学习。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 向",
              "answer": "答案示例：向前走。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 给 (4)",
              "answer": "答案示例：我给他发信息。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 跟 (5)",
              "answer": "答案示例：我跟朋友学习。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันโทรหาคุณ",
              "answer": "我给你打电话。",
              "mode": "exact"
            },
            {
              "prompt": "เขาคุยกับเพื่อน",
              "answer": "他跟朋友聊天。",
              "mode": "exact"
            },
            {
              "prompt": "กรุณาเดินไปทางซ้าย",
              "answer": "请向左走。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันโทรหาคุณ (4)",
              "answer": "我给你打电话。",
              "mode": "exact"
            },
            {
              "prompt": "เขาคุยกับเพื่อน (5)",
              "answer": "他跟朋友聊天。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ gěi nǐ dǎ diànhuà.",
              "answer": "我给你打电话。",
              "mode": "exact"
            },
            {
              "prompt": "Tā gēn péngyou liáotiān.",
              "answer": "他跟朋友聊天。",
              "mode": "exact"
            },
            {
              "prompt": "Qǐng xiàng zuǒ zǒu.",
              "answer": "请向左走。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ gěi nǐ dǎ diànhuà. (4)",
              "answer": "我给你打电话。",
              "mode": "exact"
            },
            {
              "prompt": "Tā gēn péngyou liáotiān. (5)",
              "answer": "他跟朋友聊天。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 向",
              "answer": "向",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 给",
              "answer": "给",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 跟",
              "answer": "跟",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 向 (4)",
              "answer": "向",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 给 (5)",
              "answer": "给",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 向",
              "answer": "答案示例：我给你打电话。",
              "required": [
                "向"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 给",
              "answer": "答案示例：他跟朋友聊天。",
              "required": [
                "给"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 跟",
              "answer": "答案示例：请向左走。",
              "required": [
                "跟"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 对",
              "answer": "答案示例：我给你打电话。",
              "required": [
                "对"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 朋友",
              "answer": "答案示例：他跟朋友聊天。",
              "required": [
                "朋友"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我给他发信息。",
          "tokens": [
            "给",
            "发",
            "息",
            "我",
            "他",
            "信"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我跟朋友学习。",
          "tokens": [
            "跟",
            "友",
            "习",
            "我",
            "朋",
            "学"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "向前走。",
          "tokens": [
            "前",
            "向",
            "走"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันโทรหาคุณ",
          "answer": "我给你打电话。",
          "tokens": [
            "给",
            "打",
            "话",
            "我",
            "你",
            "电"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขาคุยกับเพื่อน",
          "answer": "他跟朋友聊天。",
          "tokens": [
            "跟",
            "友",
            "天",
            "他",
            "朋",
            "聊"
          ]
        }
      ]
    },
    {
      "id": 19,
      "title": "比：比较",
      "thaiTitle": "比: การเปรียบเทียบ",
      "formula": "A + 比 + B + 形容词",
      "thai": "A ... กว่า B",
      "thaiExplanation": "โครงสร้างเปรียบเทียบคือ A + 比 + B + คำคุณศัพท์ โดยทั่วไปไม่ใส่ 很 หน้า adjective ในประโยค比",
      "tip": "比较句里一般不再加“很”。",
      "examples": [
        {
          "zh": "我比他高。",
          "pinyin": "Wǒ bǐ tā gāo.",
          "thai": "ฉันสูงกว่าเขา",
          "tone": "Wo3 bi3 ta1 gao1."
        },
        {
          "zh": "今天比昨天热。",
          "pinyin": "Jīntiān bǐ zuótiān rè.",
          "thai": "วันนี้ร้อนกว่าเมื่อวาน",
          "tone": "Jintian1 bi3 zuotian1 re4."
        }
      ],
      "words": [
        "比",
        "高",
        "矮",
        "大",
        "小",
        "热"
      ],
      "vocab": [
        {
          "word": "比",
          "pinyin": "bǐ",
          "tone": "bi3",
          "thai": "กว่า / เปรียบเทียบ"
        },
        {
          "word": "高",
          "pinyin": "gāo",
          "tone": "gao1",
          "thai": "สูง"
        },
        {
          "word": "矮",
          "pinyin": "ǎi",
          "tone": "ai3",
          "thai": "เตี้ย"
        },
        {
          "word": "大",
          "pinyin": "dà",
          "tone": "da4",
          "thai": "ใหญ่"
        },
        {
          "word": "小",
          "pinyin": "xiǎo",
          "tone": "xiao3",
          "thai": "เล็ก"
        },
        {
          "word": "热",
          "pinyin": "rè",
          "tone": "re4",
          "thai": "ร้อน"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 比 (bǐ) แปลว่าอะไร?",
              "answer": "กว่า / เปรียบเทียบ",
              "mode": "choice",
              "options": [
                "สูง",
                "ใหญ่",
                "กว่า / เปรียบเทียบ",
                "เตี้ย"
              ]
            },
            {
              "prompt": "คำว่า 高 (gāo) แปลว่าอะไร?",
              "answer": "สูง",
              "mode": "choice",
              "options": [
                "กว่า / เปรียบเทียบ",
                "ใหญ่",
                "สูง",
                "เตี้ย"
              ]
            },
            {
              "prompt": "คำว่า 矮 (ǎi) แปลว่าอะไร?",
              "answer": "เตี้ย",
              "mode": "choice",
              "options": [
                "กว่า / เปรียบเทียบ",
                "ใหญ่",
                "เตี้ย",
                "สูง"
              ]
            },
            {
              "prompt": "คำว่า 大 (dà) แปลว่าอะไร?",
              "answer": "ใหญ่",
              "mode": "choice",
              "options": [
                "กว่า / เปรียบเทียบ",
                "เตี้ย",
                "ใหญ่",
                "สูง"
              ]
            },
            {
              "prompt": "คำไทย “กว่า / เปรียบเทียบ” ตรงกับคำจีนข้อใด?",
              "answer": "比",
              "mode": "choice",
              "options": [
                "高",
                "大",
                "比",
                "矮"
              ]
            }
          ]
        },
        {
          "type": "แก้ประโยคผิด",
          "prompts": [
            {
              "prompt": "แก้ประโยคผิด: 我比他很高。",
              "answer": "我比他高。",
              "mode": "exact"
            },
            {
              "prompt": "แก้ประโยคผิด: 这个比那个很大。",
              "answer": "这个比那个大。",
              "mode": "exact"
            },
            {
              "prompt": "แก้ประโยคผิด: 我比他很高。 (3)",
              "answer": "我比他高。",
              "mode": "exact"
            },
            {
              "prompt": "แก้ประโยคผิด: 这个比那个很大。 (4)",
              "answer": "这个比那个大。",
              "mode": "exact"
            },
            {
              "prompt": "แก้ประโยคผิด: 我比他很高。 (5)",
              "answer": "我比他高。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันสูงกว่าเขา",
              "answer": "我比他高。",
              "mode": "exact"
            },
            {
              "prompt": "วันนี้ร้อนกว่าเมื่อวาน",
              "answer": "今天比昨天热。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันสูงกว่าเขา (3)",
              "answer": "我比他高。",
              "mode": "exact"
            },
            {
              "prompt": "วันนี้ร้อนกว่าเมื่อวาน (4)",
              "answer": "今天比昨天热。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันสูงกว่าเขา (5)",
              "answer": "我比他高。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ bǐ tā gāo.",
              "answer": "我比他高。",
              "mode": "exact"
            },
            {
              "prompt": "Jīntiān bǐ zuótiān rè.",
              "answer": "今天比昨天热。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ bǐ tā gāo. (3)",
              "answer": "我比他高。",
              "mode": "exact"
            },
            {
              "prompt": "Jīntiān bǐ zuótiān rè. (4)",
              "answer": "今天比昨天热。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ bǐ tā gāo. (5)",
              "answer": "我比他高。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 比",
              "answer": "比",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 高",
              "answer": "高",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 矮",
              "answer": "矮",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 比 (4)",
              "answer": "比",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 高 (5)",
              "answer": "高",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 比",
              "answer": "答案示例：我比他高。",
              "required": [
                "比"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 高",
              "answer": "答案示例：今天比昨天热。",
              "required": [
                "高"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 矮",
              "answer": "答案示例：我比他高。",
              "required": [
                "矮"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 大",
              "answer": "答案示例：今天比昨天热。",
              "required": [
                "大"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 小",
              "answer": "答案示例：我比他高。",
              "required": [
                "小"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我比他高。",
          "tokens": [
            "他",
            "比",
            "我",
            "高"
          ]
        },
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "今天比昨天热。",
          "tokens": [
            "昨天",
            "比",
            "今天",
            "热"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "这个比那个大。",
          "tokens": [
            "个",
            "那",
            "大",
            "这",
            "比",
            "个"
          ]
        },
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง (4)",
          "answer": "我比他高。",
          "tokens": [
            "他",
            "比",
            "我",
            "高"
          ]
        },
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "今天比昨天热。",
          "tokens": [
            "昨天",
            "比",
            "今天",
            "热"
          ]
        }
      ]
    },
    {
      "id": 20,
      "title": "虽然……但是……",
      "thaiTitle": "แม้ว่า...แต่... 虽然……但是……",
      "formula": "虽然 + 情况，但是 + 转折结果",
      "thai": "แม้ว่า...แต่...",
      "thaiExplanation": "ใช้บอกความขัดแย้งของข้อมูล คล้าย แม้ว่า...แต่... ภาษาจีนสามารถใช้ทั้ง 虽然 และ 但是 ในประโยคเดียวกันได้",
      "tip": "中文里“虽然”和“但是”可搭配使用。",
      "examples": [
        {
          "zh": "虽然下雨，但是我还要去。",
          "pinyin": "Suīrán xiàyǔ, dànshì wǒ hái yào qù.",
          "thai": "ถึงฝนตก แต่ฉันยังจะไป",
          "tone": "Suiran2 xiayu3, danshi4 wo3 hai2 yao4 qu4."
        },
        {
          "zh": "虽然他很忙，但是他很开心。",
          "pinyin": "Suīrán tā hěn máng, dànshì tā hěn kāixīn.",
          "thai": "แม้เขายุ่ง แต่เขามีความสุข",
          "tone": "Suiran2 ta1 hen3 mang2, danshi4 ta1 hen3 kaixin1."
        }
      ],
      "words": [
        "虽然",
        "但是",
        "下雨",
        "忙",
        "开心"
      ],
      "vocab": [
        {
          "word": "虽然",
          "pinyin": "suīrán",
          "tone": "suiran2",
          "thai": "แม้ว่า"
        },
        {
          "word": "但是",
          "pinyin": "dànshì",
          "tone": "danshi4",
          "thai": "แต่"
        },
        {
          "word": "下雨",
          "pinyin": "xià yǔ",
          "tone": "xia4 yu3",
          "thai": "ฝนตก"
        },
        {
          "word": "忙",
          "pinyin": "máng",
          "tone": "mang2",
          "thai": "ยุ่ง"
        },
        {
          "word": "开心",
          "pinyin": "kāixīn",
          "tone": "kaixin1",
          "thai": "ดีใจ"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 虽然 (suīrán) แปลว่าอะไร?",
              "answer": "แม้ว่า",
              "mode": "choice",
              "options": [
                "แต่",
                "ยุ่ง",
                "แม้ว่า",
                "ฝนตก"
              ]
            },
            {
              "prompt": "คำว่า 但是 (dànshì) แปลว่าอะไร?",
              "answer": "แต่",
              "mode": "choice",
              "options": [
                "แม้ว่า",
                "ยุ่ง",
                "แต่",
                "ฝนตก"
              ]
            },
            {
              "prompt": "คำว่า 下雨 (xià yǔ) แปลว่าอะไร?",
              "answer": "ฝนตก",
              "mode": "choice",
              "options": [
                "แม้ว่า",
                "ยุ่ง",
                "ฝนตก",
                "แต่"
              ]
            },
            {
              "prompt": "คำว่า 忙 (máng) แปลว่าอะไร?",
              "answer": "ยุ่ง",
              "mode": "choice",
              "options": [
                "แม้ว่า",
                "ฝนตก",
                "ยุ่ง",
                "แต่"
              ]
            },
            {
              "prompt": "คำไทย “แม้ว่า” ตรงกับคำจีนข้อใด?",
              "answer": "虽然",
              "mode": "choice",
              "options": [
                "但是",
                "忙",
                "虽然",
                "下雨"
              ]
            }
          ]
        },
        {
          "type": "เชื่อมสองส่วนให้เป็นประโยค",
          "prompts": [
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 下雨 / 我还要去",
              "answer": "虽然下雨，但是我还要去。",
              "mode": "exact"
            },
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 他很忙 / 他很开心",
              "answer": "虽然他很忙，但是他很开心。",
              "mode": "exact"
            },
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 下雨 / 我还要去 (3)",
              "answer": "虽然下雨，但是我还要去。",
              "mode": "exact"
            },
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 他很忙 / 他很开心 (4)",
              "answer": "虽然他很忙，但是他很开心。",
              "mode": "exact"
            },
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 下雨 / 我还要去 (5)",
              "answer": "虽然下雨，但是我还要去。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: __我很累，__我还要学习。",
              "answer": "虽然，但是",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: __我很累，__我还要学习。 (2)",
              "answer": "虽然，但是",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: __我很累，__我还要学习。 (3)",
              "answer": "虽然，但是",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: __我很累，__我还要学习。 (4)",
              "answer": "虽然，但是",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: __我很累，__我还要学习。 (5)",
              "answer": "虽然，但是",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ถึงฝนตก แต่ฉันยังจะไป",
              "answer": "虽然下雨，但是我还要去。",
              "mode": "exact"
            },
            {
              "prompt": "แม้เขายุ่ง แต่เขามีความสุข",
              "answer": "虽然他很忙，但是他很开心。",
              "mode": "exact"
            },
            {
              "prompt": "ถึงฝนตก แต่ฉันยังจะไป (3)",
              "answer": "虽然下雨，但是我还要去。",
              "mode": "exact"
            },
            {
              "prompt": "แม้เขายุ่ง แต่เขามีความสุข (4)",
              "answer": "虽然他很忙，但是他很开心。",
              "mode": "exact"
            },
            {
              "prompt": "ถึงฝนตก แต่ฉันยังจะไป (5)",
              "answer": "虽然下雨，但是我还要去。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Suīrán xiàyǔ, dànshì wǒ hái yào qù.",
              "answer": "虽然下雨，但是我还要去。",
              "mode": "exact"
            },
            {
              "prompt": "Suīrán tā hěn máng, dànshì tā hěn kāixīn.",
              "answer": "虽然他很忙，但是他很开心。",
              "mode": "exact"
            },
            {
              "prompt": "Suīrán xiàyǔ, dànshì wǒ hái yào qù. (3)",
              "answer": "虽然下雨，但是我还要去。",
              "mode": "exact"
            },
            {
              "prompt": "Suīrán tā hěn máng, dànshì tā hěn kāixīn. (4)",
              "answer": "虽然他很忙，但是他很开心。",
              "mode": "exact"
            },
            {
              "prompt": "Suīrán xiàyǔ, dànshì wǒ hái yào qù. (5)",
              "answer": "虽然下雨，但是我还要去。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 虽然",
              "answer": "虽然",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 但是",
              "answer": "但是",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 下雨",
              "answer": "下雨",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 虽然 (4)",
              "answer": "虽然",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 但是 (5)",
              "answer": "但是",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 虽然",
              "answer": "答案示例：虽然下雨，但是我还要去。",
              "required": [
                "虽然"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 但是",
              "answer": "答案示例：虽然他很忙，但是他很开心。",
              "required": [
                "但是"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 下雨",
              "answer": "答案示例：虽然下雨，但是我还要去。",
              "required": [
                "下雨"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 忙",
              "answer": "答案示例：虽然他很忙，但是他很开心。",
              "required": [
                "忙"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 开心",
              "answer": "答案示例：虽然下雨，但是我还要去。",
              "required": [
                "开心"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "虽然，但是",
          "tokens": [
            "然",
            "是",
            "虽",
            "但"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ถึงฝนตก แต่ฉันยังจะไป",
          "answer": "虽然下雨，但是我还要去。",
          "tokens": [
            "然",
            "雨",
            "是",
            "还",
            "去",
            "虽",
            "下",
            "但",
            "我",
            "要"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: แม้เขายุ่ง แต่เขามีความสุข",
          "answer": "虽然他很忙，但是他很开心。",
          "tokens": [
            "然",
            "很",
            "但",
            "他",
            "开",
            "虽",
            "他",
            "忙",
            "是",
            "很",
            "心"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (4)",
          "answer": "虽然，但是",
          "tokens": [
            "然",
            "是",
            "虽",
            "但"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ถึงฝนตก แต่ฉันยังจะไป (5)",
          "answer": "虽然下雨，但是我还要去。",
          "tokens": [
            "然",
            "雨",
            "是",
            "还",
            "去",
            "虽",
            "下",
            "但",
            "我",
            "要"
          ]
        }
      ]
    },
    {
      "id": 21,
      "title": "一边……一边……",
      "thaiTitle": "ทำสองอย่างพร้อมกัน 一边……一边……",
      "formula": "一边 + 动作1，一边 + 动作2",
      "thai": "ทำสองอย่างพร้อมกัน",
      "thaiExplanation": "ใช้เมื่อสองการกระทำเกิดขึ้นพร้อมกัน เช่น ฟังเพลงไปด้วย ทำการบ้านไปด้วย",
      "tip": "表示两个动作同时进行。",
      "examples": [
        {
          "zh": "他一边听歌，一边写作业。",
          "pinyin": "Tā yìbiān tīng gē, yìbiān xiě zuòyè.",
          "thai": "เขาฟังเพลงไปทำการบ้านไป",
          "tone": "Ta1 yibian1 ting1 ge1, yibian1 xie3 zuoye4."
        },
        {
          "zh": "我一边吃饭，一边看电视。",
          "pinyin": "Wǒ yìbiān chī fàn, yìbiān kàn diànshì.",
          "thai": "ฉันกินข้าวไปดูทีวีไป",
          "tone": "Wo3 yibian1 chi1 fan4, yibian1 kan4 dianshi4."
        }
      ],
      "words": [
        "一边",
        "听歌",
        "写作业",
        "吃饭",
        "看电视"
      ],
      "vocab": [
        {
          "word": "一边",
          "pinyin": "yìbiān",
          "tone": "yibian1",
          "thai": "ด้านหนึ่ง / ทำไปพร้อมกัน"
        },
        {
          "word": "听歌",
          "pinyin": "tīng gē",
          "tone": "ting1 ge1",
          "thai": "ฟังเพลง"
        },
        {
          "word": "写作业",
          "pinyin": "xiě zuòyè",
          "tone": "xie3 zuoye4",
          "thai": "ทำการบ้าน"
        },
        {
          "word": "吃饭",
          "pinyin": "chī fàn",
          "tone": "chi1 fan4",
          "thai": "กินข้าว"
        },
        {
          "word": "看电视",
          "pinyin": "kàn diànshì",
          "tone": "kan4 dianshi4",
          "thai": "ดูทีวี"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 一边 (yìbiān) แปลว่าอะไร?",
              "answer": "ด้านหนึ่ง / ทำไปพร้อมกัน",
              "mode": "choice",
              "options": [
                "ฟังเพลง",
                "กินข้าว",
                "ด้านหนึ่ง / ทำไปพร้อมกัน",
                "ทำการบ้าน"
              ]
            },
            {
              "prompt": "คำว่า 听歌 (tīng gē) แปลว่าอะไร?",
              "answer": "ฟังเพลง",
              "mode": "choice",
              "options": [
                "ด้านหนึ่ง / ทำไปพร้อมกัน",
                "กินข้าว",
                "ฟังเพลง",
                "ทำการบ้าน"
              ]
            },
            {
              "prompt": "คำว่า 写作业 (xiě zuòyè) แปลว่าอะไร?",
              "answer": "ทำการบ้าน",
              "mode": "choice",
              "options": [
                "ด้านหนึ่ง / ทำไปพร้อมกัน",
                "กินข้าว",
                "ทำการบ้าน",
                "ฟังเพลง"
              ]
            },
            {
              "prompt": "คำว่า 吃饭 (chī fàn) แปลว่าอะไร?",
              "answer": "กินข้าว",
              "mode": "choice",
              "options": [
                "ด้านหนึ่ง / ทำไปพร้อมกัน",
                "ทำการบ้าน",
                "กินข้าว",
                "ฟังเพลง"
              ]
            },
            {
              "prompt": "คำไทย “ด้านหนึ่ง / ทำไปพร้อมกัน” ตรงกับคำจีนข้อใด?",
              "answer": "一边",
              "mode": "choice",
              "options": [
                "听歌",
                "吃饭",
                "一边",
                "写作业"
              ]
            }
          ]
        },
        {
          "type": "เชื่อมสองส่วนให้เป็นประโยค",
          "prompts": [
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 听歌 / 写作业",
              "answer": "他一边听歌，一边写作业。",
              "mode": "exact"
            },
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 吃饭 / 看电视",
              "answer": "我一边吃饭，一边看电视。",
              "mode": "exact"
            },
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 听歌 / 写作业 (3)",
              "answer": "他一边听歌，一边写作业。",
              "mode": "exact"
            },
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 吃饭 / 看电视 (4)",
              "answer": "我一边吃饭，一边看电视。",
              "mode": "exact"
            },
            {
              "prompt": "เชื่อมสองส่วนให้เป็นประโยค: 听歌 / 写作业 (5)",
              "answer": "他一边听歌，一边写作业。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยค",
          "prompts": [
            {
              "prompt": "แต่งประโยค: 一边……一边……",
              "answer": "答案示例：我一边喝咖啡，一边看书。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 一边……一边…… (2)",
              "answer": "答案示例：我一边喝咖啡，一边看书。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 一边……一边…… (3)",
              "answer": "答案示例：我一边喝咖啡，一边看书。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 一边……一边…… (4)",
              "answer": "答案示例：我一边喝咖啡，一边看书。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 一边……一边…… (5)",
              "answer": "答案示例：我一边喝咖啡，一边看书。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "เขาฟังเพลงไปทำการบ้านไป",
              "answer": "他一边听歌，一边写作业。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันกินข้าวไปดูทีวีไป",
              "answer": "我一边吃饭，一边看电视。",
              "mode": "exact"
            },
            {
              "prompt": "เขาฟังเพลงไปทำการบ้านไป (3)",
              "answer": "他一边听歌，一边写作业。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันกินข้าวไปดูทีวีไป (4)",
              "answer": "我一边吃饭，一边看电视。",
              "mode": "exact"
            },
            {
              "prompt": "เขาฟังเพลงไปทำการบ้านไป (5)",
              "answer": "他一边听歌，一边写作业。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Tā yìbiān tīng gē, yìbiān xiě zuòyè.",
              "answer": "他一边听歌，一边写作业。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ yìbiān chī fàn, yìbiān kàn diànshì.",
              "answer": "我一边吃饭，一边看电视。",
              "mode": "exact"
            },
            {
              "prompt": "Tā yìbiān tīng gē, yìbiān xiě zuòyè. (3)",
              "answer": "他一边听歌，一边写作业。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ yìbiān chī fàn, yìbiān kàn diànshì. (4)",
              "answer": "我一边吃饭，一边看电视。",
              "mode": "exact"
            },
            {
              "prompt": "Tā yìbiān tīng gē, yìbiān xiě zuòyè. (5)",
              "answer": "他一边听歌，一边写作业。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 一边",
              "answer": "一边",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 听歌",
              "answer": "听歌",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 写作业",
              "answer": "写作业",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 一边 (4)",
              "answer": "一边",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 听歌 (5)",
              "answer": "听歌",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 一边",
              "answer": "答案示例：他一边听歌，一边写作业。",
              "required": [
                "一边"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 听歌",
              "answer": "答案示例：我一边吃饭，一边看电视。",
              "required": [
                "听歌"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 写作业",
              "answer": "答案示例：他一边听歌，一边写作业。",
              "required": [
                "写作业"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 吃饭",
              "answer": "答案示例：我一边吃饭，一边看电视。",
              "required": [
                "吃饭"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 看电视",
              "answer": "答案示例：他一边听歌，一边写作业。",
              "required": [
                "看电视"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我一边喝咖啡，一边看书。",
          "tokens": [
            "一",
            "喝",
            "啡",
            "边",
            "书",
            "我",
            "边",
            "咖",
            "一",
            "看"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขาฟังเพลงไปทำการบ้านไป",
          "answer": "他一边听歌，一边写作业。",
          "tokens": [
            "一",
            "听",
            "一",
            "写",
            "业",
            "他",
            "边",
            "歌",
            "边",
            "作"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันกินข้าวไปดูทีวีไป",
          "answer": "我一边吃饭，一边看电视。",
          "tokens": [
            "一",
            "吃",
            "一",
            "看",
            "视",
            "我",
            "边",
            "饭",
            "边",
            "电"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (4)",
          "answer": "我一边喝咖啡，一边看书。",
          "tokens": [
            "一",
            "喝",
            "啡",
            "边",
            "书",
            "我",
            "边",
            "咖",
            "一",
            "看"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขาฟังเพลงไปทำการบ้านไป (5)",
          "answer": "他一边听歌，一边写作业。",
          "tokens": [
            "一",
            "听",
            "一",
            "写",
            "业",
            "他",
            "边",
            "歌",
            "边",
            "作"
          ]
        }
      ]
    },
    {
      "id": 22,
      "title": "除了……以外，还/都",
      "thaiTitle": "นอกจาก...แล้วยัง / ยกเว้น...ทั้งหมด",
      "formula": "除了 A 以外，还 B / 除了 A 以外，都 B",
      "thai": "นอกจาก...แล้วยัง... / ยกเว้น...ทั้งหมด...",
      "thaiExplanation": "除了...以外 ใช้เปิดส่วนที่ถูกแยกออกมา ถ้าใช้ 还 คือเพิ่มอีกอย่าง ถ้าใช้ 都 คือยกเว้นสิ่งนั้นแล้วที่เหลือทั้งหมด",
      "tip": "“还”表示追加；“都”表示排除 A 后其余全部。",
      "examples": [
        {
          "zh": "除了中文以外，我还学泰语。",
          "pinyin": "Chúle Zhōngwén yǐwài, wǒ hái xué Tàiyǔ.",
          "thai": "นอกจากจีน ฉันยังเรียนไทย",
          "tone": "Chule2 Zhongwen2 yiwai4, wo3 hai2 xue2 Taiyu3."
        },
        {
          "zh": "除了他以外，大家都来了。",
          "pinyin": "Chúle tā yǐwài, dàjiā dōu lái le.",
          "thai": "นอกจากเขา ทุกคนมาแล้ว",
          "tone": "Chule2 ta1 yiwai4, dajia1 dou1 lai2 le."
        }
      ],
      "words": [
        "除了",
        "以外",
        "还",
        "都",
        "大家"
      ],
      "vocab": [
        {
          "word": "除了",
          "pinyin": "chúle",
          "tone": "chule2",
          "thai": "นอกจาก"
        },
        {
          "word": "以外",
          "pinyin": "yǐwài",
          "tone": "yiwai4",
          "thai": "นอกเหนือจาก"
        },
        {
          "word": "还",
          "pinyin": "hái",
          "tone": "hai2",
          "thai": "ยัง / ยังมี"
        },
        {
          "word": "都",
          "pinyin": "dōu",
          "tone": "dou1",
          "thai": "ทั้งหมด"
        },
        {
          "word": "大家",
          "pinyin": "dàjiā",
          "tone": "dajia1",
          "thai": "ทุกคน"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 除了 (chúle) แปลว่าอะไร?",
              "answer": "นอกจาก",
              "mode": "choice",
              "options": [
                "นอกเหนือจาก",
                "ทั้งหมด",
                "นอกจาก",
                "ยัง / ยังมี"
              ]
            },
            {
              "prompt": "คำว่า 以外 (yǐwài) แปลว่าอะไร?",
              "answer": "นอกเหนือจาก",
              "mode": "choice",
              "options": [
                "นอกจาก",
                "ทั้งหมด",
                "นอกเหนือจาก",
                "ยัง / ยังมี"
              ]
            },
            {
              "prompt": "คำว่า 还 (hái) แปลว่าอะไร?",
              "answer": "ยัง / ยังมี",
              "mode": "choice",
              "options": [
                "นอกจาก",
                "ทั้งหมด",
                "ยัง / ยังมี",
                "นอกเหนือจาก"
              ]
            },
            {
              "prompt": "คำว่า 都 (dōu) แปลว่าอะไร?",
              "answer": "ทั้งหมด",
              "mode": "choice",
              "options": [
                "นอกจาก",
                "ยัง / ยังมี",
                "ทั้งหมด",
                "นอกเหนือจาก"
              ]
            },
            {
              "prompt": "คำไทย “นอกจาก” ตรงกับคำจีนข้อใด?",
              "answer": "除了",
              "mode": "choice",
              "options": [
                "以外",
                "都",
                "除了",
                "还"
              ]
            }
          ]
        },
        {
          "type": "เลือกคำตอบที่ถูกต้อง",
          "prompts": [
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 除了咖啡以外，我__喝茶。",
              "answer": "还",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 除了他以外，大家__到了。",
              "answer": "都",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 除了咖啡以外，我__喝茶。 (3)",
              "answer": "还",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 除了他以外，大家__到了。 (4)",
              "answer": "都",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 除了咖啡以外，我__喝茶。 (5)",
              "answer": "还",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: นอกจากจีน ฉันยังเรียนอังกฤษ",
              "answer": "除了中文以外，我还学英文。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ยกเว้นเธอ ทุกคนมาแล้ว",
              "answer": "除了她以外，大家都来了。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: นอกจากจีน ฉันยังเรียนอังกฤษ (3)",
              "answer": "除了中文以外，我还学英文。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ยกเว้นเธอ ทุกคนมาแล้ว (4)",
              "answer": "除了她以外，大家都来了。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: นอกจากจีน ฉันยังเรียนอังกฤษ (5)",
              "answer": "除了中文以外，我还学英文。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "นอกจากจีน ฉันยังเรียนไทย",
              "answer": "除了中文以外，我还学泰语。",
              "mode": "exact"
            },
            {
              "prompt": "นอกจากเขา ทุกคนมาแล้ว",
              "answer": "除了他以外，大家都来了。",
              "mode": "exact"
            },
            {
              "prompt": "นอกจากจีน ฉันยังเรียนไทย (3)",
              "answer": "除了中文以外，我还学泰语。",
              "mode": "exact"
            },
            {
              "prompt": "นอกจากเขา ทุกคนมาแล้ว (4)",
              "answer": "除了他以外，大家都来了。",
              "mode": "exact"
            },
            {
              "prompt": "นอกจากจีน ฉันยังเรียนไทย (5)",
              "answer": "除了中文以外，我还学泰语。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Chúle Zhōngwén yǐwài, wǒ hái xué Tàiyǔ.",
              "answer": "除了中文以外，我还学泰语。",
              "mode": "exact"
            },
            {
              "prompt": "Chúle tā yǐwài, dàjiā dōu lái le.",
              "answer": "除了他以外，大家都来了。",
              "mode": "exact"
            },
            {
              "prompt": "Chúle Zhōngwén yǐwài, wǒ hái xué Tàiyǔ. (3)",
              "answer": "除了中文以外，我还学泰语。",
              "mode": "exact"
            },
            {
              "prompt": "Chúle tā yǐwài, dàjiā dōu lái le. (4)",
              "answer": "除了他以外，大家都来了。",
              "mode": "exact"
            },
            {
              "prompt": "Chúle Zhōngwén yǐwài, wǒ hái xué Tàiyǔ. (5)",
              "answer": "除了中文以外，我还学泰语。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 除了",
              "answer": "除了",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 以外",
              "answer": "以外",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 还",
              "answer": "还",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 除了 (4)",
              "answer": "除了",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 以外 (5)",
              "answer": "以外",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 除了",
              "answer": "答案示例：除了中文以外，我还学泰语。",
              "required": [
                "除了"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 以外",
              "answer": "答案示例：除了他以外，大家都来了。",
              "required": [
                "以外"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 还",
              "answer": "答案示例：除了中文以外，我还学泰语。",
              "required": [
                "还"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 都",
              "answer": "答案示例：除了他以外，大家都来了。",
              "required": [
                "都"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 大家",
              "answer": "答案示例：除了中文以外，我还学泰语。",
              "required": [
                "大家"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "除了中文以外，我还学英文。",
          "tokens": [
            "了",
            "文",
            "外",
            "还",
            "英",
            "除",
            "中",
            "以",
            "我",
            "学",
            "文"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "除了她以外，大家都来了。",
          "tokens": [
            "了",
            "以",
            "大",
            "都",
            "了",
            "除",
            "她",
            "外",
            "家",
            "来"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: นอกจากจีน ฉันยังเรียนไทย",
          "answer": "除了中文以外，我还学泰语。",
          "tokens": [
            "了",
            "文",
            "外",
            "还",
            "泰",
            "除",
            "中",
            "以",
            "我",
            "学",
            "语"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: นอกจากเขา ทุกคนมาแล้ว",
          "answer": "除了他以外，大家都来了。",
          "tokens": [
            "了",
            "以",
            "大",
            "都",
            "了",
            "除",
            "他",
            "外",
            "家",
            "来"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "除了中文以外，我还学英文。",
          "tokens": [
            "了",
            "文",
            "外",
            "还",
            "英",
            "除",
            "中",
            "以",
            "我",
            "学",
            "文"
          ]
        }
      ]
    },
    {
      "id": 23,
      "title": "越……越……",
      "thaiTitle": "ยิ่ง...ยิ่ง... 越……越……",
      "formula": "越 + 动作/形容词，越 + 形容词/结果",
      "thai": "ยิ่ง...ยิ่ง...",
      "thaiExplanation": "ใช้บอกว่ายิ่งสิ่งหนึ่งเพิ่ม อีกสิ่งหนึ่งก็เพิ่มตาม เช่น ยิ่งเรียนยิ่งสนุก",
      "tip": "表示程度随条件变化而变化。",
      "examples": [
        {
          "zh": "天气越来越热了。",
          "pinyin": "Tiānqì yuè lái yuè rè le.",
          "thai": "อากาศยิ่งร้อนขึ้นเรื่อย ๆ",
          "tone": "Tianqi4 yue4 lai2 yue4 re4 le."
        },
        {
          "zh": "越学越有意思。",
          "pinyin": "Yuè xué yuè yǒu yìsi.",
          "thai": "ยิ่งเรียนยิ่งน่าสนใจ",
          "tone": "Yue4 xue2 yue4 you3 yisi4."
        }
      ],
      "words": [
        "越",
        "越来越",
        "热",
        "好",
        "有意思",
        "学"
      ],
      "vocab": [
        {
          "word": "越",
          "pinyin": "yuè",
          "tone": "yue4",
          "thai": "ยิ่ง"
        },
        {
          "word": "越来越",
          "pinyin": "yuè lái yuè",
          "tone": "yue4 lai2 yue4",
          "thai": "ยิ่ง...ขึ้นเรื่อย ๆ"
        },
        {
          "word": "热",
          "pinyin": "rè",
          "tone": "re4",
          "thai": "ร้อน"
        },
        {
          "word": "好",
          "pinyin": "hǎo",
          "tone": "hao3",
          "thai": "ดี"
        },
        {
          "word": "有意思",
          "pinyin": "yǒu yìsi",
          "tone": "you3 yisi4",
          "thai": "น่าสนใจ"
        },
        {
          "word": "学",
          "pinyin": "xué",
          "tone": "xue2",
          "thai": "เรียน"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 越 (yuè) แปลว่าอะไร?",
              "answer": "ยิ่ง",
              "mode": "choice",
              "options": [
                "ยิ่ง...ขึ้นเรื่อย ๆ",
                "ดี",
                "ยิ่ง",
                "ร้อน"
              ]
            },
            {
              "prompt": "คำว่า 越来越 (yuè lái yuè) แปลว่าอะไร?",
              "answer": "ยิ่ง...ขึ้นเรื่อย ๆ",
              "mode": "choice",
              "options": [
                "ยิ่ง",
                "ดี",
                "ยิ่ง...ขึ้นเรื่อย ๆ",
                "ร้อน"
              ]
            },
            {
              "prompt": "คำว่า 热 (rè) แปลว่าอะไร?",
              "answer": "ร้อน",
              "mode": "choice",
              "options": [
                "ยิ่ง",
                "ดี",
                "ร้อน",
                "ยิ่ง...ขึ้นเรื่อย ๆ"
              ]
            },
            {
              "prompt": "คำว่า 好 (hǎo) แปลว่าอะไร?",
              "answer": "ดี",
              "mode": "choice",
              "options": [
                "ยิ่ง",
                "ร้อน",
                "ดี",
                "ยิ่ง...ขึ้นเรื่อย ๆ"
              ]
            },
            {
              "prompt": "คำไทย “ยิ่ง” ตรงกับคำจีนข้อใด?",
              "answer": "越",
              "mode": "choice",
              "options": [
                "越来越",
                "好",
                "越",
                "热"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 天气__来__热了。",
              "answer": "越，越",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: __学__有意思。",
              "answer": "越，越",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 天气__来__热了。 (3)",
              "answer": "越，越",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: __学__有意思。 (4)",
              "answer": "越，越",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 天气__来__热了。 (5)",
              "answer": "越，越",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยค",
          "prompts": [
            {
              "prompt": "แต่งประโยค: 越来越",
              "answer": "答案示例：我越来越忙了。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 越……越……",
              "answer": "答案示例：中文越学越有意思。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 越来越 (3)",
              "answer": "答案示例：我越来越忙了。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 越……越…… (4)",
              "answer": "答案示例：中文越学越有意思。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 越来越 (5)",
              "answer": "答案示例：我越来越忙了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "อากาศยิ่งร้อนขึ้นเรื่อย ๆ",
              "answer": "天气越来越热了。",
              "mode": "exact"
            },
            {
              "prompt": "ยิ่งเรียนยิ่งน่าสนใจ",
              "answer": "越学越有意思。",
              "mode": "exact"
            },
            {
              "prompt": "อากาศยิ่งร้อนขึ้นเรื่อย ๆ (3)",
              "answer": "天气越来越热了。",
              "mode": "exact"
            },
            {
              "prompt": "ยิ่งเรียนยิ่งน่าสนใจ (4)",
              "answer": "越学越有意思。",
              "mode": "exact"
            },
            {
              "prompt": "อากาศยิ่งร้อนขึ้นเรื่อย ๆ (5)",
              "answer": "天气越来越热了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Tiānqì yuè lái yuè rè le.",
              "answer": "天气越来越热了。",
              "mode": "exact"
            },
            {
              "prompt": "Yuè xué yuè yǒu yìsi.",
              "answer": "越学越有意思。",
              "mode": "exact"
            },
            {
              "prompt": "Tiānqì yuè lái yuè rè le. (3)",
              "answer": "天气越来越热了。",
              "mode": "exact"
            },
            {
              "prompt": "Yuè xué yuè yǒu yìsi. (4)",
              "answer": "越学越有意思。",
              "mode": "exact"
            },
            {
              "prompt": "Tiānqì yuè lái yuè rè le. (5)",
              "answer": "天气越来越热了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 越",
              "answer": "越",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 越来越",
              "answer": "越来越",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 热",
              "answer": "热",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 越 (4)",
              "answer": "越",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 越来越 (5)",
              "answer": "越来越",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 越",
              "answer": "答案示例：天气越来越热了。",
              "required": [
                "越"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 越来越",
              "answer": "答案示例：越学越有意思。",
              "required": [
                "越来越"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 热",
              "answer": "答案示例：天气越来越热了。",
              "required": [
                "热"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 好",
              "answer": "答案示例：越学越有意思。",
              "required": [
                "好"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 有意思",
              "answer": "答案示例：天气越来越热了。",
              "required": [
                "有意思"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我越来越忙了。",
          "tokens": [
            "越",
            "越",
            "了",
            "我",
            "来",
            "忙"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "中文越学越有意思。",
          "tokens": [
            "文",
            "学",
            "有",
            "思",
            "中",
            "越",
            "越",
            "意"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: อากาศยิ่งร้อนขึ้นเรื่อย ๆ",
          "answer": "天气越来越热了。",
          "tokens": [
            "气",
            "来",
            "热",
            "天",
            "越",
            "越",
            "了"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ยิ่งเรียนยิ่งน่าสนใจ",
          "answer": "越学越有意思。",
          "tokens": [
            "学",
            "有",
            "思",
            "越",
            "越",
            "意"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "我越来越忙了。",
          "tokens": [
            "越",
            "越",
            "了",
            "我",
            "来",
            "忙"
          ]
        }
      ]
    },
    {
      "id": 24,
      "title": "的：所属关系",
      "thaiTitle": "的: แสดงความเป็นเจ้าของ",
      "formula": "人 / 代词 + 的 + 名词",
      "thai": "ของ...",
      "thaiExplanation": "的 ใช้เชื่อมเจ้าของกับสิ่งของหรือความสัมพันธ์ แปลได้ว่า ของ เช่น หนังสือของฉัน",
      "tip": "表示所属关系，相当于ภาษาไทย “ของ”。",
      "examples": [
        {
          "zh": "我的书",
          "pinyin": "wǒ de shū",
          "thai": "หนังสือของฉัน",
          "tone": "wo3 de shu1"
        },
        {
          "zh": "老师的手机",
          "pinyin": "lǎoshī de shǒujī",
          "thai": "โทรศัพท์ของครู",
          "tone": "laoshi1 de shouji1"
        }
      ],
      "words": [
        "我的",
        "你的",
        "他的",
        "书",
        "手机"
      ],
      "vocab": [
        {
          "word": "我的",
          "pinyin": "wǒ de",
          "tone": "wo3 de",
          "thai": "ของฉัน"
        },
        {
          "word": "你的",
          "pinyin": "nǐ de",
          "tone": "ni3 de",
          "thai": "ของคุณ"
        },
        {
          "word": "他的",
          "pinyin": "tā de",
          "tone": "ta1 de",
          "thai": "ของเขา"
        },
        {
          "word": "书",
          "pinyin": "shū",
          "tone": "shu1",
          "thai": "หนังสือ"
        },
        {
          "word": "手机",
          "pinyin": "shǒujī",
          "tone": "shouji1",
          "thai": "โทรศัพท์มือถือ"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 我的 (wǒ de) แปลว่าอะไร?",
              "answer": "ของฉัน",
              "mode": "choice",
              "options": [
                "ของคุณ",
                "หนังสือ",
                "ของฉัน",
                "ของเขา"
              ]
            },
            {
              "prompt": "คำว่า 你的 (nǐ de) แปลว่าอะไร?",
              "answer": "ของคุณ",
              "mode": "choice",
              "options": [
                "ของฉัน",
                "หนังสือ",
                "ของคุณ",
                "ของเขา"
              ]
            },
            {
              "prompt": "คำว่า 他的 (tā de) แปลว่าอะไร?",
              "answer": "ของเขา",
              "mode": "choice",
              "options": [
                "ของฉัน",
                "หนังสือ",
                "ของเขา",
                "ของคุณ"
              ]
            },
            {
              "prompt": "คำว่า 书 (shū) แปลว่าอะไร?",
              "answer": "หนังสือ",
              "mode": "choice",
              "options": [
                "ของฉัน",
                "ของเขา",
                "หนังสือ",
                "ของคุณ"
              ]
            },
            {
              "prompt": "คำไทย “ของฉัน” ตรงกับคำจีนข้อใด?",
              "answer": "我的",
              "mode": "choice",
              "options": [
                "你的",
                "书",
                "我的",
                "他的"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__书",
              "answer": "的",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 老师__手机",
              "answer": "的",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__朋友",
              "answer": "的",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__书 (4)",
              "answer": "的",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 老师__手机 (5)",
              "answer": "的",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: หนังสือของฉัน",
              "answer": "我的书",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เพื่อนของเขา",
              "answer": "他的朋友",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: หนังสือของฉัน (3)",
              "answer": "我的书",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เพื่อนของเขา (4)",
              "answer": "他的朋友",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: หนังสือของฉัน (5)",
              "answer": "我的书",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "หนังสือของฉัน",
              "answer": "我的书",
              "mode": "exact"
            },
            {
              "prompt": "โทรศัพท์ของครู",
              "answer": "老师的手机",
              "mode": "exact"
            },
            {
              "prompt": "หนังสือของฉัน (3)",
              "answer": "我的书",
              "mode": "exact"
            },
            {
              "prompt": "โทรศัพท์ของครู (4)",
              "answer": "老师的手机",
              "mode": "exact"
            },
            {
              "prompt": "หนังสือของฉัน (5)",
              "answer": "我的书",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "wǒ de shū",
              "answer": "我的书",
              "mode": "exact"
            },
            {
              "prompt": "lǎoshī de shǒujī",
              "answer": "老师的手机",
              "mode": "exact"
            },
            {
              "prompt": "wǒ de shū (3)",
              "answer": "我的书",
              "mode": "exact"
            },
            {
              "prompt": "lǎoshī de shǒujī (4)",
              "answer": "老师的手机",
              "mode": "exact"
            },
            {
              "prompt": "wǒ de shū (5)",
              "answer": "我的书",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 我的",
              "answer": "我的",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 你的",
              "answer": "你的",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 他的",
              "answer": "他的",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 我的 (4)",
              "answer": "我的",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 你的 (5)",
              "answer": "你的",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 我的",
              "answer": "答案示例：我的书",
              "required": [
                "我的"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 你的",
              "answer": "答案示例：老师的手机",
              "required": [
                "你的"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 他的",
              "answer": "答案示例：我的书",
              "required": [
                "他的"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 书",
              "answer": "答案示例：老师的手机",
              "required": [
                "书"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 手机",
              "answer": "答案示例：我的书",
              "required": [
                "手机"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我的书",
          "tokens": [
            "的",
            "我",
            "书"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他的朋友",
          "tokens": [
            "的",
            "友",
            "他",
            "朋"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: โทรศัพท์ของครู",
          "answer": "老师的手机",
          "tokens": [
            "师",
            "手",
            "老",
            "的",
            "机"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (4)",
          "answer": "我的书",
          "tokens": [
            "的",
            "我",
            "书"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "他的朋友",
          "tokens": [
            "的",
            "友",
            "他",
            "朋"
          ]
        }
      ]
    },
    {
      "id": 25,
      "title": "的：省略名词",
      "thaiTitle": "的: ใช้แทนคำนามที่ละไว้",
      "formula": "形容词 / 代词 + 的",
      "thai": "ใช้แทนนามที่รู้กันอยู่แล้ว",
      "thaiExplanation": "เมื่อคำนามข้างหลังเป็นที่รู้กันอยู่แล้ว สามารถละคำนามและใช้ 的 แทน เช่น อันสีแดง = 红的",
      "tip": "名词已经清楚时，可以省略名词，只留下“的”。",
      "examples": [
        {
          "zh": "这个是我的。",
          "pinyin": "Zhège shì wǒ de.",
          "thai": "อันนี้เป็นของฉัน",
          "tone": "Zhege4 shi4 wo3 de."
        },
        {
          "zh": "我要红的。",
          "pinyin": "Wǒ yào hóng de.",
          "thai": "ฉันเอาอันสีแดง",
          "tone": "Wo3 yao4 hong2 de."
        }
      ],
      "words": [
        "我的",
        "你的",
        "红的",
        "大的",
        "小的"
      ],
      "vocab": [
        {
          "word": "我的",
          "pinyin": "wǒ de",
          "tone": "wo3 de",
          "thai": "ของฉัน"
        },
        {
          "word": "你的",
          "pinyin": "nǐ de",
          "tone": "ni3 de",
          "thai": "ของคุณ"
        },
        {
          "word": "红的",
          "pinyin": "hóng de",
          "tone": "hong2 de",
          "thai": "อันสีแดง"
        },
        {
          "word": "大的",
          "pinyin": "dà de",
          "tone": "da4 de",
          "thai": "อันใหญ่"
        },
        {
          "word": "小的",
          "pinyin": "xiǎo de",
          "tone": "xiao3 de",
          "thai": "อันเล็ก"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 我的 (wǒ de) แปลว่าอะไร?",
              "answer": "ของฉัน",
              "mode": "choice",
              "options": [
                "ของคุณ",
                "อันใหญ่",
                "ของฉัน",
                "อันสีแดง"
              ]
            },
            {
              "prompt": "คำว่า 你的 (nǐ de) แปลว่าอะไร?",
              "answer": "ของคุณ",
              "mode": "choice",
              "options": [
                "ของฉัน",
                "อันใหญ่",
                "ของคุณ",
                "อันสีแดง"
              ]
            },
            {
              "prompt": "คำว่า 红的 (hóng de) แปลว่าอะไร?",
              "answer": "อันสีแดง",
              "mode": "choice",
              "options": [
                "ของฉัน",
                "อันใหญ่",
                "อันสีแดง",
                "ของคุณ"
              ]
            },
            {
              "prompt": "คำว่า 大的 (dà de) แปลว่าอะไร?",
              "answer": "อันใหญ่",
              "mode": "choice",
              "options": [
                "ของฉัน",
                "อันสีแดง",
                "อันใหญ่",
                "ของคุณ"
              ]
            },
            {
              "prompt": "คำไทย “ของฉัน” ตรงกับคำจีนข้อใด?",
              "answer": "我的",
              "mode": "choice",
              "options": [
                "你的",
                "大的",
                "我的",
                "红的"
              ]
            }
          ]
        },
        {
          "type": "เติมประโยคให้สมบูรณ์",
          "prompts": [
            {
              "prompt": "เติมประโยคให้สมบูรณ์: 这个是我__。",
              "answer": "的",
              "mode": "exact"
            },
            {
              "prompt": "เติมประโยคให้สมบูรณ์: 我要红__。",
              "answer": "的",
              "mode": "exact"
            },
            {
              "prompt": "เติมประโยคให้สมบูรณ์: 那个是你__吗？",
              "answer": "的",
              "mode": "exact"
            },
            {
              "prompt": "เติมประโยคให้สมบูรณ์: 这个是我__。 (4)",
              "answer": "的",
              "mode": "exact"
            },
            {
              "prompt": "เติมประโยคให้สมบูรณ์: 我要红__。 (5)",
              "answer": "的",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: อันนี้ของฉัน",
              "answer": "这个是我的。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันเอาอันใหญ่",
              "answer": "我要大的。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: อันนี้ของฉัน (3)",
              "answer": "这个是我的。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันเอาอันใหญ่ (4)",
              "answer": "我要大的。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: อันนี้ของฉัน (5)",
              "answer": "这个是我的。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "อันนี้เป็นของฉัน",
              "answer": "这个是我的。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันเอาอันสีแดง",
              "answer": "我要红的。",
              "mode": "exact"
            },
            {
              "prompt": "อันนี้เป็นของฉัน (3)",
              "answer": "这个是我的。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันเอาอันสีแดง (4)",
              "answer": "我要红的。",
              "mode": "exact"
            },
            {
              "prompt": "อันนี้เป็นของฉัน (5)",
              "answer": "这个是我的。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Zhège shì wǒ de.",
              "answer": "这个是我的。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ yào hóng de.",
              "answer": "我要红的。",
              "mode": "exact"
            },
            {
              "prompt": "Zhège shì wǒ de. (3)",
              "answer": "这个是我的。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ yào hóng de. (4)",
              "answer": "我要红的。",
              "mode": "exact"
            },
            {
              "prompt": "Zhège shì wǒ de. (5)",
              "answer": "这个是我的。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 我的",
              "answer": "我的",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 你的",
              "answer": "你的",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 红的",
              "answer": "红的",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 我的 (4)",
              "answer": "我的",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 你的 (5)",
              "answer": "你的",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 我的",
              "answer": "答案示例：这个是我的。",
              "required": [
                "我的"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 你的",
              "answer": "答案示例：我要红的。",
              "required": [
                "你的"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 红的",
              "answer": "答案示例：这个是我的。",
              "required": [
                "红的"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 大的",
              "answer": "答案示例：我要红的。",
              "required": [
                "大的"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 小的",
              "answer": "答案示例：这个是我的。",
              "required": [
                "小的"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "这个是我的。",
          "tokens": [
            "个",
            "我",
            "这",
            "是",
            "的"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我要大的。",
          "tokens": [
            "要",
            "的",
            "我",
            "大"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันเอาอันสีแดง",
          "answer": "我要红的。",
          "tokens": [
            "要",
            "的",
            "我",
            "红"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (4)",
          "answer": "这个是我的。",
          "tokens": [
            "个",
            "我",
            "这",
            "是",
            "的"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "我要大的。",
          "tokens": [
            "要",
            "的",
            "我",
            "大"
          ]
        }
      ]
    },
    {
      "id": 26,
      "title": "得：程度补语",
      "thaiTitle": "得: บอกระดับหรือผลของกริยา",
      "formula": "动词 + 得 + 程度 / 结果",
      "thai": "บอกว่าทำได้แค่ไหน",
      "thaiExplanation": "得 อยู่หลังกริยา แล้วตามด้วยคำที่บอกว่าทำได้ดี เร็ว มาก หรือเป็นอย่างไร",
      "tip": "“得”放在动词后，说明动作做得怎么样。",
      "examples": [
        {
          "zh": "他说得很快。",
          "pinyin": "Tā shuō de hěn kuài.",
          "thai": "เขาพูดเร็วมาก",
          "tone": "Ta1 shuo1 de hen3 kuai4."
        },
        {
          "zh": "你写得很好。",
          "pinyin": "Nǐ xiě de hěn hǎo.",
          "thai": "คุณเขียนได้ดีมาก",
          "tone": "Ni3 xie3 de hen3 hao3."
        }
      ],
      "words": [
        "得",
        "说",
        "写",
        "快",
        "好"
      ],
      "vocab": [
        {
          "word": "得",
          "pinyin": "de",
          "tone": "de",
          "thai": "ใช้บอกผลหรือระดับหลังกริยา"
        },
        {
          "word": "说",
          "pinyin": "shuō",
          "tone": "shuo1",
          "thai": "พูด"
        },
        {
          "word": "写",
          "pinyin": "xiě",
          "tone": "xie3",
          "thai": "เขียน"
        },
        {
          "word": "快",
          "pinyin": "kuài",
          "tone": "kuai4",
          "thai": "เร็ว"
        },
        {
          "word": "好",
          "pinyin": "hǎo",
          "tone": "hao3",
          "thai": "ดี"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 得 (de) แปลว่าอะไร?",
              "answer": "ใช้บอกผลหรือระดับหลังกริยา",
              "mode": "choice",
              "options": [
                "พูด",
                "เร็ว",
                "ใช้บอกผลหรือระดับหลังกริยา",
                "เขียน"
              ]
            },
            {
              "prompt": "คำว่า 说 (shuō) แปลว่าอะไร?",
              "answer": "พูด",
              "mode": "choice",
              "options": [
                "ใช้บอกผลหรือระดับหลังกริยา",
                "เร็ว",
                "พูด",
                "เขียน"
              ]
            },
            {
              "prompt": "คำว่า 写 (xiě) แปลว่าอะไร?",
              "answer": "เขียน",
              "mode": "choice",
              "options": [
                "ใช้บอกผลหรือระดับหลังกริยา",
                "เร็ว",
                "เขียน",
                "พูด"
              ]
            },
            {
              "prompt": "คำว่า 快 (kuài) แปลว่าอะไร?",
              "answer": "เร็ว",
              "mode": "choice",
              "options": [
                "ใช้บอกผลหรือระดับหลังกริยา",
                "เขียน",
                "เร็ว",
                "พูด"
              ]
            },
            {
              "prompt": "คำไทย “ใช้บอกผลหรือระดับหลังกริยา” ตรงกับคำจีนข้อใด?",
              "answer": "得",
              "mode": "choice",
              "options": [
                "说",
                "快",
                "得",
                "写"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 他说__很快。",
              "answer": "得",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 你写__很好。",
              "answer": "得",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 她唱__不错。",
              "answer": "得",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他说__很快。 (4)",
              "answer": "得",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 你写__很好。 (5)",
              "answer": "得",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "เขาพูดเร็วมาก",
              "answer": "他说得很快。",
              "mode": "exact"
            },
            {
              "prompt": "คุณเขียนได้ดีมาก",
              "answer": "你写得很好。",
              "mode": "exact"
            },
            {
              "prompt": "เขาพูดเร็วมาก (3)",
              "answer": "他说得很快。",
              "mode": "exact"
            },
            {
              "prompt": "คุณเขียนได้ดีมาก (4)",
              "answer": "你写得很好。",
              "mode": "exact"
            },
            {
              "prompt": "เขาพูดเร็วมาก (5)",
              "answer": "他说得很快。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Tā shuō de hěn kuài.",
              "answer": "他说得很快。",
              "mode": "exact"
            },
            {
              "prompt": "Nǐ xiě de hěn hǎo.",
              "answer": "你写得很好。",
              "mode": "exact"
            },
            {
              "prompt": "Tā shuō de hěn kuài. (3)",
              "answer": "他说得很快。",
              "mode": "exact"
            },
            {
              "prompt": "Nǐ xiě de hěn hǎo. (4)",
              "answer": "你写得很好。",
              "mode": "exact"
            },
            {
              "prompt": "Tā shuō de hěn kuài. (5)",
              "answer": "他说得很快。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 得",
              "answer": "得",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 说",
              "answer": "说",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 写",
              "answer": "写",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 得 (4)",
              "answer": "得",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 说 (5)",
              "answer": "说",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 得",
              "answer": "答案示例：他说得很快。",
              "required": [
                "得"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 说",
              "answer": "答案示例：你写得很好。",
              "required": [
                "说"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 写",
              "answer": "答案示例：他说得很快。",
              "required": [
                "写"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 快",
              "answer": "答案示例：你写得很好。",
              "required": [
                "快"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 好",
              "answer": "答案示例：他说得很快。",
              "required": [
                "好"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他说得很好。",
          "tokens": [
            "他",
            "很好",
            "说",
            "得"
          ]
        },
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "你写得很快。",
          "tokens": [
            "你",
            "很快",
            "写",
            "得"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขาพูดเร็วมาก",
          "answer": "他说得很快。",
          "tokens": [
            "说",
            "很",
            "他",
            "得",
            "快"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: คุณเขียนได้ดีมาก",
          "answer": "你写得很好。",
          "tokens": [
            "写",
            "很",
            "你",
            "得",
            "好"
          ]
        },
        {
          "prompt": "ลากคำจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "他说得很好。",
          "tokens": [
            "他",
            "很好",
            "说",
            "得"
          ]
        }
      ]
    },
    {
      "id": 27,
      "title": "地：方式状语",
      "thaiTitle": "地: บอกวิธีทำกริยา",
      "formula": "形容词 / 副词 + 地 + 动词",
      "thai": "ทำอย่าง...",
      "thaiExplanation": "地 อยู่หน้ากริยา ใช้บอกวิธีหรืออารมณ์ในการทำ เช่น ทำอย่างตั้งใจ ยิ้มอย่างดีใจ",
      "tip": "“地”放在动词前，说明动作的方式。",
      "examples": [
        {
          "zh": "他认真地学习。",
          "pinyin": "Tā rènzhēn de xuéxí.",
          "thai": "เขาเรียนอย่างตั้งใจ",
          "tone": "Ta1 renzhen1 de xuexi2."
        },
        {
          "zh": "她高兴地笑了。",
          "pinyin": "Tā gāoxìng de xiào le.",
          "thai": "เธอยิ้มอย่างดีใจ",
          "tone": "Ta1 gaoxing4 de xiao4 le."
        }
      ],
      "words": [
        "地",
        "认真",
        "高兴",
        "慢慢",
        "学习"
      ],
      "vocab": [
        {
          "word": "地",
          "pinyin": "de",
          "tone": "de",
          "thai": "ใช้นำหน้ากริยาเพื่อบอกวิธีทำ"
        },
        {
          "word": "认真",
          "pinyin": "rènzhēn",
          "tone": "renzhen1",
          "thai": "ตั้งใจ / จริงจัง"
        },
        {
          "word": "高兴",
          "pinyin": "gāoxìng",
          "tone": "gaoxing4",
          "thai": "ดีใจ"
        },
        {
          "word": "慢慢",
          "pinyin": "mànmàn",
          "tone": "manman4",
          "thai": "ช้า ๆ"
        },
        {
          "word": "学习",
          "pinyin": "xuéxí",
          "tone": "xuexi2",
          "thai": "เรียน / ศึกษา"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 地 (de) แปลว่าอะไร?",
              "answer": "ใช้นำหน้ากริยาเพื่อบอกวิธีทำ",
              "mode": "choice",
              "options": [
                "ตั้งใจ / จริงจัง",
                "ช้า ๆ",
                "ใช้นำหน้ากริยาเพื่อบอกวิธีทำ",
                "ดีใจ"
              ]
            },
            {
              "prompt": "คำว่า 认真 (rènzhēn) แปลว่าอะไร?",
              "answer": "ตั้งใจ / จริงจัง",
              "mode": "choice",
              "options": [
                "ใช้นำหน้ากริยาเพื่อบอกวิธีทำ",
                "ช้า ๆ",
                "ตั้งใจ / จริงจัง",
                "ดีใจ"
              ]
            },
            {
              "prompt": "คำว่า 高兴 (gāoxìng) แปลว่าอะไร?",
              "answer": "ดีใจ",
              "mode": "choice",
              "options": [
                "ใช้นำหน้ากริยาเพื่อบอกวิธีทำ",
                "ช้า ๆ",
                "ดีใจ",
                "ตั้งใจ / จริงจัง"
              ]
            },
            {
              "prompt": "คำว่า 慢慢 (mànmàn) แปลว่าอะไร?",
              "answer": "ช้า ๆ",
              "mode": "choice",
              "options": [
                "ใช้นำหน้ากริยาเพื่อบอกวิธีทำ",
                "ดีใจ",
                "ช้า ๆ",
                "ตั้งใจ / จริงจัง"
              ]
            },
            {
              "prompt": "คำไทย “ใช้นำหน้ากริยาเพื่อบอกวิธีทำ” ตรงกับคำจีนข้อใด?",
              "answer": "地",
              "mode": "choice",
              "options": [
                "认真",
                "慢慢",
                "地",
                "高兴"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 他认真__学习。",
              "answer": "地",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 她高兴__笑了。",
              "answer": "地",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 请慢慢__说。",
              "answer": "地",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他认真__学习。 (4)",
              "answer": "地",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 她高兴__笑了。 (5)",
              "answer": "地",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยค",
          "prompts": [
            {
              "prompt": "แต่งประโยค: 认真地",
              "answer": "答案示例：我认真地写作业。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 高兴地",
              "answer": "答案示例：她高兴地笑了。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 认真地 (3)",
              "answer": "答案示例：我认真地写作业。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 高兴地 (4)",
              "answer": "答案示例：她高兴地笑了。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 认真地 (5)",
              "answer": "答案示例：我认真地写作业。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "เขาเรียนอย่างตั้งใจ",
              "answer": "他认真地学习。",
              "mode": "exact"
            },
            {
              "prompt": "เธอยิ้มอย่างดีใจ",
              "answer": "她高兴地笑了。",
              "mode": "exact"
            },
            {
              "prompt": "เขาเรียนอย่างตั้งใจ (3)",
              "answer": "他认真地学习。",
              "mode": "exact"
            },
            {
              "prompt": "เธอยิ้มอย่างดีใจ (4)",
              "answer": "她高兴地笑了。",
              "mode": "exact"
            },
            {
              "prompt": "เขาเรียนอย่างตั้งใจ (5)",
              "answer": "他认真地学习。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Tā rènzhēn de xuéxí.",
              "answer": "他认真地学习。",
              "mode": "exact"
            },
            {
              "prompt": "Tā gāoxìng de xiào le.",
              "answer": "她高兴地笑了。",
              "mode": "exact"
            },
            {
              "prompt": "Tā rènzhēn de xuéxí. (3)",
              "answer": "他认真地学习。",
              "mode": "exact"
            },
            {
              "prompt": "Tā gāoxìng de xiào le. (4)",
              "answer": "她高兴地笑了。",
              "mode": "exact"
            },
            {
              "prompt": "Tā rènzhēn de xuéxí. (5)",
              "answer": "他认真地学习。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 地",
              "answer": "地",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 认真",
              "answer": "认真",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 高兴",
              "answer": "高兴",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 地 (4)",
              "answer": "地",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 认真 (5)",
              "answer": "认真",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 地",
              "answer": "答案示例：他认真地学习。",
              "required": [
                "地"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 认真",
              "answer": "答案示例：她高兴地笑了。",
              "required": [
                "认真"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 高兴",
              "answer": "答案示例：他认真地学习。",
              "required": [
                "高兴"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 慢慢",
              "answer": "答案示例：她高兴地笑了。",
              "required": [
                "慢慢"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 学习",
              "answer": "答案示例：他认真地学习。",
              "required": [
                "学习"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我认真地写作业。",
          "tokens": [
            "认",
            "地",
            "作",
            "我",
            "真",
            "写",
            "业"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "她高兴地笑了。",
          "tokens": [
            "高",
            "地",
            "了",
            "她",
            "兴",
            "笑"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขาเรียนอย่างตั้งใจ",
          "answer": "他认真地学习。",
          "tokens": [
            "认",
            "地",
            "习",
            "他",
            "真",
            "学"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (4)",
          "answer": "我认真地写作业。",
          "tokens": [
            "认",
            "地",
            "作",
            "我",
            "真",
            "写",
            "业"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "她高兴地笑了。",
          "tokens": [
            "高",
            "地",
            "了",
            "她",
            "兴",
            "笑"
          ]
        }
      ]
    },
    {
      "id": 28,
      "title": "去 / 来：方向",
      "thaiTitle": "去 / 来: ทิศทาง ไป / มา",
      "formula": "去 + 地点 / 来 + 地点",
      "thai": "ไป / มา",
      "thaiExplanation": "去 คือไปออกจากจุดพูด ส่วน 来 คือมาหาจุดพูด ใช้กับสถานที่หรือกริยาบอกทิศทาง",
      "tip": "“去”表示离开说话人方向，“来”表示靠近说话人方向。",
      "examples": [
        {
          "zh": "我去学校。",
          "pinyin": "Wǒ qù xuéxiào.",
          "thai": "ฉันไปโรงเรียน",
          "tone": "Wo3 qu4 xuexiao4."
        },
        {
          "zh": "你来我家吧。",
          "pinyin": "Nǐ lái wǒ jiā ba.",
          "thai": "คุณมาบ้านฉันเถอะ",
          "tone": "Ni3 lai2 wo3 jia1 ba."
        }
      ],
      "words": [
        "去",
        "来",
        "学校",
        "家",
        "中国"
      ],
      "vocab": [
        {
          "word": "去",
          "pinyin": "qù",
          "tone": "qu4",
          "thai": "ไป"
        },
        {
          "word": "来",
          "pinyin": "lái",
          "tone": "lai2",
          "thai": "มา"
        },
        {
          "word": "学校",
          "pinyin": "xuéxiào",
          "tone": "xuexiao4",
          "thai": "โรงเรียน"
        },
        {
          "word": "家",
          "pinyin": "jiā",
          "tone": "jia1",
          "thai": "บ้าน"
        },
        {
          "word": "中国",
          "pinyin": "Zhōngguó",
          "tone": "Zhongguo2",
          "thai": "ประเทศจีน"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 去 (qù) แปลว่าอะไร?",
              "answer": "ไป",
              "mode": "choice",
              "options": [
                "มา",
                "บ้าน",
                "ไป",
                "โรงเรียน"
              ]
            },
            {
              "prompt": "คำว่า 来 (lái) แปลว่าอะไร?",
              "answer": "มา",
              "mode": "choice",
              "options": [
                "ไป",
                "บ้าน",
                "มา",
                "โรงเรียน"
              ]
            },
            {
              "prompt": "คำว่า 学校 (xuéxiào) แปลว่าอะไร?",
              "answer": "โรงเรียน",
              "mode": "choice",
              "options": [
                "ไป",
                "บ้าน",
                "โรงเรียน",
                "มา"
              ]
            },
            {
              "prompt": "คำว่า 家 (jiā) แปลว่าอะไร?",
              "answer": "บ้าน",
              "mode": "choice",
              "options": [
                "ไป",
                "โรงเรียน",
                "บ้าน",
                "มา"
              ]
            },
            {
              "prompt": "คำไทย “ไป” ตรงกับคำจีนข้อใด?",
              "answer": "去",
              "mode": "choice",
              "options": [
                "来",
                "家",
                "去",
                "学校"
              ]
            }
          ]
        },
        {
          "type": "เลือกคำตอบที่ถูกต้อง",
          "prompts": [
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__学校。",
              "answer": "去",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 你__我家吧。",
              "answer": "来",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 他明天__中国。",
              "answer": "来/去",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__学校。 (4)",
              "answer": "去",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 你__我家吧。 (5)",
              "answer": "来",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันไปบ้านเพื่อน",
              "answer": "我去朋友家。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: คุณมาที่นี่",
              "answer": "你来这里。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันไปบ้านเพื่อน (3)",
              "answer": "我去朋友家。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: คุณมาที่นี่ (4)",
              "answer": "你来这里。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันไปบ้านเพื่อน (5)",
              "answer": "我去朋友家。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันไปโรงเรียน",
              "answer": "我去学校。",
              "mode": "exact"
            },
            {
              "prompt": "คุณมาบ้านฉันเถอะ",
              "answer": "你来我家吧。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันไปโรงเรียน (3)",
              "answer": "我去学校。",
              "mode": "exact"
            },
            {
              "prompt": "คุณมาบ้านฉันเถอะ (4)",
              "answer": "你来我家吧。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันไปโรงเรียน (5)",
              "answer": "我去学校。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ qù xuéxiào.",
              "answer": "我去学校。",
              "mode": "exact"
            },
            {
              "prompt": "Nǐ lái wǒ jiā ba.",
              "answer": "你来我家吧。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ qù xuéxiào. (3)",
              "answer": "我去学校。",
              "mode": "exact"
            },
            {
              "prompt": "Nǐ lái wǒ jiā ba. (4)",
              "answer": "你来我家吧。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ qù xuéxiào. (5)",
              "answer": "我去学校。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 去",
              "answer": "去",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 来",
              "answer": "来",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 学校",
              "answer": "学校",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 去 (4)",
              "answer": "去",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 来 (5)",
              "answer": "来",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 去",
              "answer": "答案示例：我去学校。",
              "required": [
                "去"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 来",
              "answer": "答案示例：你来我家吧。",
              "required": [
                "来"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 学校",
              "answer": "答案示例：我去学校。",
              "required": [
                "学校"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 家",
              "answer": "答案示例：你来我家吧。",
              "required": [
                "家"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 中国",
              "answer": "答案示例：我去学校。",
              "required": [
                "中国"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "来/去",
          "tokens": [
            "/",
            "来",
            "去"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我去朋友家。",
          "tokens": [
            "去",
            "友",
            "我",
            "朋",
            "家"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "你来这里。",
          "tokens": [
            "来",
            "里",
            "你",
            "这"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันไปโรงเรียน",
          "answer": "我去学校。",
          "tokens": [
            "去",
            "校",
            "我",
            "学"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: คุณมาบ้านฉันเถอะ",
          "answer": "你来我家吧。",
          "tokens": [
            "来",
            "家",
            "你",
            "我",
            "吧"
          ]
        }
      ]
    },
    {
      "id": 29,
      "title": "觉得：表达看法",
      "thaiTitle": "觉得: บอกความคิดเห็นหรือความรู้สึก",
      "formula": "主语 + 觉得 + 句子 / 形容词",
      "thai": "รู้สึกว่า / คิดว่า",
      "thaiExplanation": "觉得 ใช้พูดความรู้สึก ความคิดเห็น หรือการประเมิน เช่น ฉันรู้สึกว่าภาษาจีนน่าสนใจ",
      "tip": "“觉得”用于表达感觉、意见或判断。",
      "examples": [
        {
          "zh": "我觉得中文很有意思。",
          "pinyin": "Wǒ juéde Zhōngwén hěn yǒu yìsi.",
          "thai": "ฉันรู้สึกว่าภาษาจีนน่าสนใจ",
          "tone": "Wo3 juede2 Zhongwen2 hen3 you3 yisi4."
        },
        {
          "zh": "你觉得怎么样？",
          "pinyin": "Nǐ juéde zěnmeyàng?",
          "thai": "คุณคิดว่าเป็นอย่างไร",
          "tone": "Ni3 juede2 zenmeyang4?"
        }
      ],
      "words": [
        "觉得",
        "有意思",
        "怎么样",
        "难",
        "好"
      ],
      "vocab": [
        {
          "word": "觉得",
          "pinyin": "juéde",
          "tone": "juede2",
          "thai": "รู้สึกว่า / คิดว่า"
        },
        {
          "word": "有意思",
          "pinyin": "yǒu yìsi",
          "tone": "you3 yisi4",
          "thai": "น่าสนใจ"
        },
        {
          "word": "怎么样",
          "pinyin": "zěnmeyàng",
          "tone": "zenmeyang4",
          "thai": "เป็นอย่างไร"
        },
        {
          "word": "难",
          "pinyin": "nán",
          "tone": "nan2",
          "thai": "ยาก"
        },
        {
          "word": "好",
          "pinyin": "hǎo",
          "tone": "hao3",
          "thai": "ดี"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 觉得 (juéde) แปลว่าอะไร?",
              "answer": "รู้สึกว่า / คิดว่า",
              "mode": "choice",
              "options": [
                "น่าสนใจ",
                "ยาก",
                "รู้สึกว่า / คิดว่า",
                "เป็นอย่างไร"
              ]
            },
            {
              "prompt": "คำว่า 有意思 (yǒu yìsi) แปลว่าอะไร?",
              "answer": "น่าสนใจ",
              "mode": "choice",
              "options": [
                "รู้สึกว่า / คิดว่า",
                "ยาก",
                "น่าสนใจ",
                "เป็นอย่างไร"
              ]
            },
            {
              "prompt": "คำว่า 怎么样 (zěnmeyàng) แปลว่าอะไร?",
              "answer": "เป็นอย่างไร",
              "mode": "choice",
              "options": [
                "รู้สึกว่า / คิดว่า",
                "ยาก",
                "เป็นอย่างไร",
                "น่าสนใจ"
              ]
            },
            {
              "prompt": "คำว่า 难 (nán) แปลว่าอะไร?",
              "answer": "ยาก",
              "mode": "choice",
              "options": [
                "รู้สึกว่า / คิดว่า",
                "เป็นอย่างไร",
                "ยาก",
                "น่าสนใจ"
              ]
            },
            {
              "prompt": "คำไทย “รู้สึกว่า / คิดว่า” ตรงกับคำจีนข้อใด?",
              "answer": "觉得",
              "mode": "choice",
              "options": [
                "有意思",
                "难",
                "觉得",
                "怎么样"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__中文很有意思。",
              "answer": "觉得",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 你__怎么样？",
              "answer": "觉得",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__这个很难。",
              "answer": "觉得",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__中文很有意思。 (4)",
              "answer": "觉得",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 你__怎么样？ (5)",
              "answer": "觉得",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยค",
          "prompts": [
            {
              "prompt": "แต่งประโยค: 觉得",
              "answer": "答案示例：我觉得今天很热。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 觉得 (2)",
              "answer": "答案示例：我觉得今天很热。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 觉得 (3)",
              "answer": "答案示例：我觉得今天很热。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 觉得 (4)",
              "answer": "答案示例：我觉得今天很热。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 觉得 (5)",
              "answer": "答案示例：我觉得今天很热。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันรู้สึกว่าภาษาจีนน่าสนใจ",
              "answer": "我觉得中文很有意思。",
              "mode": "exact"
            },
            {
              "prompt": "คุณคิดว่าเป็นอย่างไร",
              "answer": "你觉得怎么样？",
              "mode": "exact"
            },
            {
              "prompt": "ฉันรู้สึกว่าภาษาจีนน่าสนใจ (3)",
              "answer": "我觉得中文很有意思。",
              "mode": "exact"
            },
            {
              "prompt": "คุณคิดว่าเป็นอย่างไร (4)",
              "answer": "你觉得怎么样？",
              "mode": "exact"
            },
            {
              "prompt": "ฉันรู้สึกว่าภาษาจีนน่าสนใจ (5)",
              "answer": "我觉得中文很有意思。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ juéde Zhōngwén hěn yǒu yìsi.",
              "answer": "我觉得中文很有意思。",
              "mode": "exact"
            },
            {
              "prompt": "Nǐ juéde zěnmeyàng?",
              "answer": "你觉得怎么样？",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ juéde Zhōngwén hěn yǒu yìsi. (3)",
              "answer": "我觉得中文很有意思。",
              "mode": "exact"
            },
            {
              "prompt": "Nǐ juéde zěnmeyàng? (4)",
              "answer": "你觉得怎么样？",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ juéde Zhōngwén hěn yǒu yìsi. (5)",
              "answer": "我觉得中文很有意思。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 觉得",
              "answer": "觉得",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 有意思",
              "answer": "有意思",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 怎么样",
              "answer": "怎么样",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 觉得 (4)",
              "answer": "觉得",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 有意思 (5)",
              "answer": "有意思",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 觉得",
              "answer": "答案示例：我觉得中文很有意思。",
              "required": [
                "觉得"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 有意思",
              "answer": "答案示例：你觉得怎么样？",
              "required": [
                "有意思"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 怎么样",
              "answer": "答案示例：我觉得中文很有意思。",
              "required": [
                "怎么样"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 难",
              "answer": "答案示例：你觉得怎么样？",
              "required": [
                "难"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 好",
              "answer": "答案示例：我觉得中文很有意思。",
              "required": [
                "好"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我觉得今天很热。",
          "tokens": [
            "觉",
            "今",
            "很",
            "我",
            "得",
            "天",
            "热"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันรู้สึกว่าภาษาจีนน่าสนใจ",
          "answer": "我觉得中文很有意思。",
          "tokens": [
            "觉",
            "中",
            "很",
            "意",
            "我",
            "得",
            "文",
            "有",
            "思"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: คุณคิดว่าเป็นอย่างไร",
          "answer": "你觉得怎么样？",
          "tokens": [
            "觉",
            "怎",
            "样",
            "你",
            "得",
            "么"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (4)",
          "answer": "我觉得今天很热。",
          "tokens": [
            "觉",
            "今",
            "很",
            "我",
            "得",
            "天",
            "热"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันรู้สึกว่าภาษาจีนน่าสนใจ (5)",
          "answer": "我觉得中文很有意思。",
          "tokens": [
            "觉",
            "中",
            "很",
            "意",
            "我",
            "得",
            "文",
            "有",
            "思"
          ]
        }
      ]
    },
    {
      "id": 30,
      "title": "喜欢 / 爱",
      "thaiTitle": "喜欢 / 爱: ชอบ / รัก",
      "formula": "喜欢 / 爱 + 人或事物 / 动作",
      "thai": "ชอบ / รัก",
      "thaiExplanation": "喜欢 แปลว่าชอบ ใช้กว้างและเป็นกลางกว่า ส่วน 爱 แปลว่ารักหรือชอบมาก มักให้ความรู้สึกแรงกว่า",
      "tip": "“爱”感情更强，也可表示习惯；“喜欢”更常用。",
      "examples": [
        {
          "zh": "我喜欢音乐。",
          "pinyin": "Wǒ xǐhuān yīnyuè.",
          "thai": "ฉันชอบดนตรี",
          "tone": "Wo3 xihuan1 yinyue4."
        },
        {
          "zh": "我爱我的家。",
          "pinyin": "Wǒ ài wǒ de jiā.",
          "thai": "ฉันรักบ้านของฉัน",
          "tone": "Wo3 ai4 wo3 de jia1."
        }
      ],
      "words": [
        "喜欢",
        "爱",
        "音乐",
        "中文",
        "家"
      ],
      "vocab": [
        {
          "word": "喜欢",
          "pinyin": "xǐhuān",
          "tone": "xihuan1",
          "thai": "ชอบ"
        },
        {
          "word": "爱",
          "pinyin": "ài",
          "tone": "ai4",
          "thai": "รัก"
        },
        {
          "word": "音乐",
          "pinyin": "yīnyuè",
          "tone": "yinyue4",
          "thai": "ดนตรี"
        },
        {
          "word": "中文",
          "pinyin": "Zhōngwén",
          "tone": "Zhongwen2",
          "thai": "ภาษาจีน"
        },
        {
          "word": "家",
          "pinyin": "jiā",
          "tone": "jia1",
          "thai": "บ้าน"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 喜欢 (xǐhuān) แปลว่าอะไร?",
              "answer": "ชอบ",
              "mode": "choice",
              "options": [
                "รัก",
                "ภาษาจีน",
                "ชอบ",
                "ดนตรี"
              ]
            },
            {
              "prompt": "คำว่า 爱 (ài) แปลว่าอะไร?",
              "answer": "รัก",
              "mode": "choice",
              "options": [
                "ชอบ",
                "ภาษาจีน",
                "รัก",
                "ดนตรี"
              ]
            },
            {
              "prompt": "คำว่า 音乐 (yīnyuè) แปลว่าอะไร?",
              "answer": "ดนตรี",
              "mode": "choice",
              "options": [
                "ชอบ",
                "ภาษาจีน",
                "ดนตรี",
                "รัก"
              ]
            },
            {
              "prompt": "คำว่า 中文 (Zhōngwén) แปลว่าอะไร?",
              "answer": "ภาษาจีน",
              "mode": "choice",
              "options": [
                "ชอบ",
                "ดนตรี",
                "ภาษาจีน",
                "รัก"
              ]
            },
            {
              "prompt": "คำไทย “ชอบ” ตรงกับคำจีนข้อใด?",
              "answer": "喜欢",
              "mode": "choice",
              "options": [
                "爱",
                "中文",
                "喜欢",
                "音乐"
              ]
            }
          ]
        },
        {
          "type": "เลือกคำตอบที่ถูกต้อง",
          "prompts": [
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__中文。",
              "answer": "喜欢/爱",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 他__喝咖啡。",
              "answer": "喜欢/爱",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__我的妈妈。",
              "answer": "爱",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我__中文。 (4)",
              "answer": "喜欢/爱",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 他__喝咖啡。 (5)",
              "answer": "喜欢/爱",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันชอบภาษาจีน",
              "answer": "我喜欢中文。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขาชอบฟังเพลง",
              "answer": "他喜欢听歌。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันชอบภาษาจีน (3)",
              "answer": "我喜欢中文。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขาชอบฟังเพลง (4)",
              "answer": "他喜欢听歌。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันชอบภาษาจีน (5)",
              "answer": "我喜欢中文。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันชอบดนตรี",
              "answer": "我喜欢音乐。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันรักบ้านของฉัน",
              "answer": "我爱我的家。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันชอบดนตรี (3)",
              "answer": "我喜欢音乐。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันรักบ้านของฉัน (4)",
              "answer": "我爱我的家。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันชอบดนตรี (5)",
              "answer": "我喜欢音乐。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ xǐhuān yīnyuè.",
              "answer": "我喜欢音乐。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ ài wǒ de jiā.",
              "answer": "我爱我的家。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ xǐhuān yīnyuè. (3)",
              "answer": "我喜欢音乐。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ ài wǒ de jiā. (4)",
              "answer": "我爱我的家。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ xǐhuān yīnyuè. (5)",
              "answer": "我喜欢音乐。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 喜欢",
              "answer": "喜欢",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 爱",
              "answer": "爱",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 音乐",
              "answer": "音乐",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 喜欢 (4)",
              "answer": "喜欢",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 爱 (5)",
              "answer": "爱",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 喜欢",
              "answer": "答案示例：我喜欢音乐。",
              "required": [
                "喜欢"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 爱",
              "answer": "答案示例：我爱我的家。",
              "required": [
                "爱"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 音乐",
              "answer": "答案示例：我喜欢音乐。",
              "required": [
                "音乐"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 中文",
              "answer": "答案示例：我爱我的家。",
              "required": [
                "中文"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 家",
              "answer": "答案示例：我喜欢音乐。",
              "required": [
                "家"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "喜欢/爱",
          "tokens": [
            "欢",
            "爱",
            "喜",
            "/"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我喜欢中文。",
          "tokens": [
            "喜",
            "中",
            "我",
            "欢",
            "文"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他喜欢听歌。",
          "tokens": [
            "喜",
            "听",
            "他",
            "欢",
            "歌"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันชอบดนตรี",
          "answer": "我喜欢音乐。",
          "tokens": [
            "喜",
            "音",
            "我",
            "欢",
            "乐"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันรักบ้านของฉัน",
          "answer": "我爱我的家。",
          "tokens": [
            "爱",
            "的",
            "我",
            "我",
            "家"
          ]
        }
      ]
    },
    {
      "id": 31,
      "title": "会：技能",
      "thaiTitle": "会: ทำเป็นเพราะมีทักษะ",
      "formula": "主语 + 会 + 动词",
      "thai": "ทำเป็น",
      "thaiExplanation": "会 ใช้กับทักษะที่เรียนรู้มาแล้ว เช่น พูดจีนเป็น ว่ายน้ำเป็น ขับรถเป็น",
      "tip": "“会”强调学会的技能。",
      "examples": [
        {
          "zh": "我会说中文。",
          "pinyin": "Wǒ huì shuō Zhōngwén.",
          "thai": "ฉันพูดภาษาจีนเป็น",
          "tone": "Wo3 hui4 shuo1 Zhongwen2."
        },
        {
          "zh": "他会游泳。",
          "pinyin": "Tā huì yóuyǒng.",
          "thai": "เขาว่ายน้ำเป็น",
          "tone": "Ta1 hui4 youyong3."
        }
      ],
      "words": [
        "会",
        "说",
        "写",
        "游泳",
        "开车"
      ],
      "vocab": [
        {
          "word": "会",
          "pinyin": "huì",
          "tone": "hui4",
          "thai": "ทำเป็น"
        },
        {
          "word": "说",
          "pinyin": "shuō",
          "tone": "shuo1",
          "thai": "พูด"
        },
        {
          "word": "写",
          "pinyin": "xiě",
          "tone": "xie3",
          "thai": "เขียน"
        },
        {
          "word": "游泳",
          "pinyin": "yóuyǒng",
          "tone": "youyong3",
          "thai": "ว่ายน้ำ"
        },
        {
          "word": "开车",
          "pinyin": "kāi chē",
          "tone": "kai1 che1",
          "thai": "ขับรถ"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 会 (huì) แปลว่าอะไร?",
              "answer": "ทำเป็น",
              "mode": "choice",
              "options": [
                "พูด",
                "ว่ายน้ำ",
                "ทำเป็น",
                "เขียน"
              ]
            },
            {
              "prompt": "คำว่า 说 (shuō) แปลว่าอะไร?",
              "answer": "พูด",
              "mode": "choice",
              "options": [
                "ทำเป็น",
                "ว่ายน้ำ",
                "พูด",
                "เขียน"
              ]
            },
            {
              "prompt": "คำว่า 写 (xiě) แปลว่าอะไร?",
              "answer": "เขียน",
              "mode": "choice",
              "options": [
                "ทำเป็น",
                "ว่ายน้ำ",
                "เขียน",
                "พูด"
              ]
            },
            {
              "prompt": "คำว่า 游泳 (yóuyǒng) แปลว่าอะไร?",
              "answer": "ว่ายน้ำ",
              "mode": "choice",
              "options": [
                "ทำเป็น",
                "เขียน",
                "ว่ายน้ำ",
                "พูด"
              ]
            },
            {
              "prompt": "คำไทย “ทำเป็น” ตรงกับคำจีนข้อใด?",
              "answer": "会",
              "mode": "choice",
              "options": [
                "说",
                "游泳",
                "会",
                "写"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__说中文。",
              "answer": "会",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__开车。",
              "answer": "会",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 你__写汉字吗？",
              "answer": "会",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__说中文。 (4)",
              "answer": "会",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__开车。 (5)",
              "answer": "会",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันว่ายน้ำเป็น",
              "answer": "我会游泳。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขาเขียนจีนเป็น",
              "answer": "他会写中文。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันว่ายน้ำเป็น (3)",
              "answer": "我会游泳。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขาเขียนจีนเป็น (4)",
              "answer": "他会写中文。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันว่ายน้ำเป็น (5)",
              "answer": "我会游泳。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันพูดภาษาจีนเป็น",
              "answer": "我会说中文。",
              "mode": "exact"
            },
            {
              "prompt": "เขาว่ายน้ำเป็น",
              "answer": "他会游泳。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันพูดภาษาจีนเป็น (3)",
              "answer": "我会说中文。",
              "mode": "exact"
            },
            {
              "prompt": "เขาว่ายน้ำเป็น (4)",
              "answer": "他会游泳。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันพูดภาษาจีนเป็น (5)",
              "answer": "我会说中文。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ huì shuō Zhōngwén.",
              "answer": "我会说中文。",
              "mode": "exact"
            },
            {
              "prompt": "Tā huì yóuyǒng.",
              "answer": "他会游泳。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ huì shuō Zhōngwén. (3)",
              "answer": "我会说中文。",
              "mode": "exact"
            },
            {
              "prompt": "Tā huì yóuyǒng. (4)",
              "answer": "他会游泳。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ huì shuō Zhōngwén. (5)",
              "answer": "我会说中文。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 会",
              "answer": "会",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 说",
              "answer": "说",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 写",
              "answer": "写",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 会 (4)",
              "answer": "会",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 说 (5)",
              "answer": "说",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 会",
              "answer": "答案示例：我会说中文。",
              "required": [
                "会"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 说",
              "answer": "答案示例：他会游泳。",
              "required": [
                "说"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 写",
              "answer": "答案示例：我会说中文。",
              "required": [
                "写"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 游泳",
              "answer": "答案示例：他会游泳。",
              "required": [
                "游泳"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 开车",
              "answer": "答案示例：我会说中文。",
              "required": [
                "开车"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我会游泳。",
          "tokens": [
            "会",
            "泳",
            "我",
            "游"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他会写中文。",
          "tokens": [
            "会",
            "中",
            "他",
            "写",
            "文"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันพูดภาษาจีนเป็น",
          "answer": "我会说中文。",
          "tokens": [
            "会",
            "中",
            "我",
            "说",
            "文"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขาว่ายน้ำเป็น",
          "answer": "他会游泳。",
          "tokens": [
            "会",
            "泳",
            "他",
            "游"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "我会游泳。",
          "tokens": [
            "会",
            "泳",
            "我",
            "游"
          ]
        }
      ]
    },
    {
      "id": 32,
      "title": "能：能力或条件允许",
      "thaiTitle": "能: สามารถเพราะมีความสามารถหรือเงื่อนไข",
      "formula": "主语 + 能 + 动词",
      "thai": "สามารถ / มีเงื่อนไขให้ทำได้",
      "thaiExplanation": "能 เน้นว่าสามารถทำได้เพราะมีความสามารถ สภาพร่างกาย เวลา หรือเงื่อนไขเอื้อให้ทำ",
      "tip": "“能”强调能力、身体状况或客观条件。",
      "examples": [
        {
          "zh": "我今天不能去。",
          "pinyin": "Wǒ jīntiān bù néng qù.",
          "thai": "วันนี้ฉันไปไม่ได้",
          "tone": "Wo3 jintian1 bu4 neng2 qu4."
        },
        {
          "zh": "这里能停车吗？",
          "pinyin": "Zhèlǐ néng tíngchē ma?",
          "thai": "ที่นี่จอดรถได้ไหม",
          "tone": "Zheli3 neng2 tingche1 ma?"
        }
      ],
      "words": [
        "能",
        "不能",
        "去",
        "停车",
        "帮忙"
      ],
      "vocab": [
        {
          "word": "能",
          "pinyin": "néng",
          "tone": "neng2",
          "thai": "สามารถ"
        },
        {
          "word": "不能",
          "pinyin": "bù néng",
          "tone": "bu4 neng2",
          "thai": "ไม่สามารถ"
        },
        {
          "word": "去",
          "pinyin": "qù",
          "tone": "qu4",
          "thai": "ไป"
        },
        {
          "word": "停车",
          "pinyin": "tíng chē",
          "tone": "ting2 che1",
          "thai": "จอดรถ"
        },
        {
          "word": "帮忙",
          "pinyin": "bāngmáng",
          "tone": "bangmang2",
          "thai": "ช่วยเหลือ"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 能 (néng) แปลว่าอะไร?",
              "answer": "สามารถ",
              "mode": "choice",
              "options": [
                "ไม่สามารถ",
                "จอดรถ",
                "สามารถ",
                "ไป"
              ]
            },
            {
              "prompt": "คำว่า 不能 (bù néng) แปลว่าอะไร?",
              "answer": "ไม่สามารถ",
              "mode": "choice",
              "options": [
                "สามารถ",
                "จอดรถ",
                "ไม่สามารถ",
                "ไป"
              ]
            },
            {
              "prompt": "คำว่า 去 (qù) แปลว่าอะไร?",
              "answer": "ไป",
              "mode": "choice",
              "options": [
                "สามารถ",
                "จอดรถ",
                "ไป",
                "ไม่สามารถ"
              ]
            },
            {
              "prompt": "คำว่า 停车 (tíng chē) แปลว่าอะไร?",
              "answer": "จอดรถ",
              "mode": "choice",
              "options": [
                "สามารถ",
                "ไป",
                "จอดรถ",
                "ไม่สามารถ"
              ]
            },
            {
              "prompt": "คำไทย “สามารถ” ตรงกับคำจีนข้อใด?",
              "answer": "能",
              "mode": "choice",
              "options": [
                "不能",
                "停车",
                "能",
                "去"
              ]
            }
          ]
        },
        {
          "type": "เลือกคำตอบที่ถูกต้อง",
          "prompts": [
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我今天不__去。",
              "answer": "能",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 这里__停车吗？",
              "answer": "能",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 你__帮我吗？",
              "answer": "能",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 我今天不__去。 (4)",
              "answer": "能",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 这里__停车吗？ (5)",
              "answer": "能",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: วันนี้ฉันไปไม่ได้",
              "answer": "我今天不能去。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ที่นี่จอดรถได้ไหม",
              "answer": "这里能停车吗？",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: วันนี้ฉันไปไม่ได้ (3)",
              "answer": "我今天不能去。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ที่นี่จอดรถได้ไหม (4)",
              "answer": "这里能停车吗？",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: วันนี้ฉันไปไม่ได้ (5)",
              "answer": "我今天不能去。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "วันนี้ฉันไปไม่ได้",
              "answer": "我今天不能去。",
              "mode": "exact"
            },
            {
              "prompt": "ที่นี่จอดรถได้ไหม",
              "answer": "这里能停车吗？",
              "mode": "exact"
            },
            {
              "prompt": "วันนี้ฉันไปไม่ได้ (3)",
              "answer": "我今天不能去。",
              "mode": "exact"
            },
            {
              "prompt": "ที่นี่จอดรถได้ไหม (4)",
              "answer": "这里能停车吗？",
              "mode": "exact"
            },
            {
              "prompt": "วันนี้ฉันไปไม่ได้ (5)",
              "answer": "我今天不能去。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ jīntiān bù néng qù.",
              "answer": "我今天不能去。",
              "mode": "exact"
            },
            {
              "prompt": "Zhèlǐ néng tíngchē ma?",
              "answer": "这里能停车吗？",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ jīntiān bù néng qù. (3)",
              "answer": "我今天不能去。",
              "mode": "exact"
            },
            {
              "prompt": "Zhèlǐ néng tíngchē ma? (4)",
              "answer": "这里能停车吗？",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ jīntiān bù néng qù. (5)",
              "answer": "我今天不能去。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 能",
              "answer": "能",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 不能",
              "answer": "不能",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 去",
              "answer": "去",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 能 (4)",
              "answer": "能",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 不能 (5)",
              "answer": "不能",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 能",
              "answer": "答案示例：我今天不能去。",
              "required": [
                "能"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 不能",
              "answer": "答案示例：这里能停车吗？",
              "required": [
                "不能"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 去",
              "answer": "答案示例：我今天不能去。",
              "required": [
                "去"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 停车",
              "answer": "答案示例：这里能停车吗？",
              "required": [
                "停车"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 帮忙",
              "answer": "答案示例：我今天不能去。",
              "required": [
                "帮忙"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我今天不能去。",
          "tokens": [
            "今",
            "不",
            "去",
            "我",
            "天",
            "能"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "这里能停车吗？",
          "tokens": [
            "里",
            "停",
            "吗",
            "这",
            "能",
            "车"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (3)",
          "answer": "我今天不能去。",
          "tokens": [
            "今",
            "不",
            "去",
            "我",
            "天",
            "能"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (4)",
          "answer": "这里能停车吗？",
          "tokens": [
            "里",
            "停",
            "吗",
            "这",
            "能",
            "车"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "我今天不能去。",
          "tokens": [
            "今",
            "不",
            "去",
            "我",
            "天",
            "能"
          ]
        }
      ]
    },
    {
      "id": 33,
      "title": "可以：允许",
      "thaiTitle": "可以: ได้ / อนุญาต",
      "formula": "可以 + 动词 / 不可以 + 动词",
      "thai": "ได้ / อนุญาต",
      "thaiExplanation": "可以 ใช้ถามหรือบอกการอนุญาต เช่น นั่งตรงนี้ได้ไหม ที่นี่สูบบุหรี่ไม่ได้",
      "tip": "“可以”常用于请求允许或说明规定。",
      "examples": [
        {
          "zh": "我可以坐这儿吗？",
          "pinyin": "Wǒ kěyǐ zuò zhèr ma?",
          "thai": "ฉันนั่งตรงนี้ได้ไหม",
          "tone": "Wo3 keyi3 zuo4 zher4 ma?"
        },
        {
          "zh": "这里不可以抽烟。",
          "pinyin": "Zhèlǐ bù kěyǐ chōuyān.",
          "thai": "ที่นี่สูบบุหรี่ไม่ได้",
          "tone": "Zheli3 bu4 keyi3 chouyan1."
        }
      ],
      "words": [
        "可以",
        "不可以",
        "坐",
        "抽烟",
        "进来"
      ],
      "vocab": [
        {
          "word": "可以",
          "pinyin": "kěyǐ",
          "tone": "keyi3",
          "thai": "ได้ / อนุญาต"
        },
        {
          "word": "不可以",
          "pinyin": "bù kěyǐ",
          "tone": "bu4 keyi3",
          "thai": "ไม่ได้ / ไม่อนุญาต"
        },
        {
          "word": "坐",
          "pinyin": "zuò",
          "tone": "zuo4",
          "thai": "นั่ง"
        },
        {
          "word": "抽烟",
          "pinyin": "chōuyān",
          "tone": "chouyan1",
          "thai": "สูบบุหรี่"
        },
        {
          "word": "进来",
          "pinyin": "jìn lái",
          "tone": "jin4 lai2",
          "thai": "เข้ามา"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 可以 (kěyǐ) แปลว่าอะไร?",
              "answer": "ได้ / อนุญาต",
              "mode": "choice",
              "options": [
                "ไม่ได้ / ไม่อนุญาต",
                "สูบบุหรี่",
                "ได้ / อนุญาต",
                "นั่ง"
              ]
            },
            {
              "prompt": "คำว่า 不可以 (bù kěyǐ) แปลว่าอะไร?",
              "answer": "ไม่ได้ / ไม่อนุญาต",
              "mode": "choice",
              "options": [
                "ได้ / อนุญาต",
                "สูบบุหรี่",
                "ไม่ได้ / ไม่อนุญาต",
                "นั่ง"
              ]
            },
            {
              "prompt": "คำว่า 坐 (zuò) แปลว่าอะไร?",
              "answer": "นั่ง",
              "mode": "choice",
              "options": [
                "ได้ / อนุญาต",
                "สูบบุหรี่",
                "นั่ง",
                "ไม่ได้ / ไม่อนุญาต"
              ]
            },
            {
              "prompt": "คำว่า 抽烟 (chōuyān) แปลว่าอะไร?",
              "answer": "สูบบุหรี่",
              "mode": "choice",
              "options": [
                "ได้ / อนุญาต",
                "นั่ง",
                "สูบบุหรี่",
                "ไม่ได้ / ไม่อนุญาต"
              ]
            },
            {
              "prompt": "คำไทย “ได้ / อนุญาต” ตรงกับคำจีนข้อใด?",
              "answer": "可以",
              "mode": "choice",
              "options": [
                "不可以",
                "抽烟",
                "可以",
                "坐"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__进来吗？",
              "answer": "可以",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 这里不__抽烟。",
              "answer": "可以",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 你__坐这儿。",
              "answer": "可以",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__进来吗？ (4)",
              "answer": "可以",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 这里不__抽烟。 (5)",
              "answer": "可以",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันเข้าไปได้ไหม",
              "answer": "我可以进去吗？",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ที่นี่สูบบุหรี่ไม่ได้",
              "answer": "这里不可以抽烟。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันเข้าไปได้ไหม (3)",
              "answer": "我可以进去吗？",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ที่นี่สูบบุหรี่ไม่ได้ (4)",
              "answer": "这里不可以抽烟。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันเข้าไปได้ไหม (5)",
              "answer": "我可以进去吗？",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันนั่งตรงนี้ได้ไหม",
              "answer": "我可以坐这儿吗？",
              "mode": "exact"
            },
            {
              "prompt": "ที่นี่สูบบุหรี่ไม่ได้",
              "answer": "这里不可以抽烟。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันนั่งตรงนี้ได้ไหม (3)",
              "answer": "我可以坐这儿吗？",
              "mode": "exact"
            },
            {
              "prompt": "ที่นี่สูบบุหรี่ไม่ได้ (4)",
              "answer": "这里不可以抽烟。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันนั่งตรงนี้ได้ไหม (5)",
              "answer": "我可以坐这儿吗？",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ kěyǐ zuò zhèr ma?",
              "answer": "我可以坐这儿吗？",
              "mode": "exact"
            },
            {
              "prompt": "Zhèlǐ bù kěyǐ chōuyān.",
              "answer": "这里不可以抽烟。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ kěyǐ zuò zhèr ma? (3)",
              "answer": "我可以坐这儿吗？",
              "mode": "exact"
            },
            {
              "prompt": "Zhèlǐ bù kěyǐ chōuyān. (4)",
              "answer": "这里不可以抽烟。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ kěyǐ zuò zhèr ma? (5)",
              "answer": "我可以坐这儿吗？",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 可以",
              "answer": "可以",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 不可以",
              "answer": "不可以",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 坐",
              "answer": "坐",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 可以 (4)",
              "answer": "可以",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 不可以 (5)",
              "answer": "不可以",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 可以",
              "answer": "答案示例：我可以坐这儿吗？",
              "required": [
                "可以"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 不可以",
              "answer": "答案示例：这里不可以抽烟。",
              "required": [
                "不可以"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 坐",
              "answer": "答案示例：我可以坐这儿吗？",
              "required": [
                "坐"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 抽烟",
              "answer": "答案示例：这里不可以抽烟。",
              "required": [
                "抽烟"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 进来",
              "answer": "答案示例：我可以坐这儿吗？",
              "required": [
                "进来"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我可以进去吗？",
          "tokens": [
            "可",
            "进",
            "吗",
            "我",
            "以",
            "去"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "这里不可以抽烟。",
          "tokens": [
            "里",
            "可",
            "抽",
            "这",
            "不",
            "以",
            "烟"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันนั่งตรงนี้ได้ไหม",
          "answer": "我可以坐这儿吗？",
          "tokens": [
            "可",
            "坐",
            "儿",
            "我",
            "以",
            "这",
            "吗"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (4)",
          "answer": "我可以进去吗？",
          "tokens": [
            "可",
            "进",
            "吗",
            "我",
            "以",
            "去"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "这里不可以抽烟。",
          "tokens": [
            "里",
            "可",
            "抽",
            "这",
            "不",
            "以",
            "烟"
          ]
        }
      ]
    },
    {
      "id": 34,
      "title": "刚 / 刚刚",
      "thaiTitle": "刚 / 刚刚: เพิ่ง...",
      "formula": "刚 / 刚刚 + 动词",
      "thai": "เพิ่ง...",
      "thaiExplanation": "刚 และ 刚刚 แปลว่าเพิ่ง ใช้บอกว่าเหตุการณ์เกิดขึ้นไม่นานก่อนเวลาพูด",
      "tip": "表示动作刚发生不久。",
      "examples": [
        {
          "zh": "我刚到。",
          "pinyin": "Wǒ gāng dào.",
          "thai": "ฉันเพิ่งถึง",
          "tone": "Wo3 gang1 dao4."
        },
        {
          "zh": "他刚刚吃完饭。",
          "pinyin": "Tā gānggāng chī wán fàn.",
          "thai": "เขาเพิ่งกินข้าวเสร็จ",
          "tone": "Ta1 ganggang1 chi1 wan2 fan4."
        }
      ],
      "words": [
        "刚",
        "刚刚",
        "到",
        "吃完",
        "回来"
      ],
      "vocab": [
        {
          "word": "刚",
          "pinyin": "gāng",
          "tone": "gang1",
          "thai": "เพิ่ง"
        },
        {
          "word": "刚刚",
          "pinyin": "gānggāng",
          "tone": "ganggang1",
          "thai": "เพิ่ง"
        },
        {
          "word": "到",
          "pinyin": "dào",
          "tone": "dao4",
          "thai": "ถึง"
        },
        {
          "word": "吃完",
          "pinyin": "chī wán",
          "tone": "chi1 wan2",
          "thai": "กินเสร็จ"
        },
        {
          "word": "回来",
          "pinyin": "huí lái",
          "tone": "hui2 lai2",
          "thai": "กลับมา"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 刚 (gāng) แปลว่าอะไร?",
              "answer": "เพิ่ง",
              "mode": "choice",
              "options": [
                "ถึง",
                "กลับมา",
                "เพิ่ง",
                "กินเสร็จ"
              ]
            },
            {
              "prompt": "คำว่า 刚刚 (gānggāng) แปลว่าอะไร?",
              "answer": "เพิ่ง",
              "mode": "choice",
              "options": [
                "ถึง",
                "กลับมา",
                "เพิ่ง",
                "กินเสร็จ"
              ]
            },
            {
              "prompt": "คำว่า 到 (dào) แปลว่าอะไร?",
              "answer": "ถึง",
              "mode": "choice",
              "options": [
                "เพิ่ง",
                "กลับมา",
                "ถึง",
                "กินเสร็จ"
              ]
            },
            {
              "prompt": "คำว่า 吃完 (chī wán) แปลว่าอะไร?",
              "answer": "กินเสร็จ",
              "mode": "choice",
              "options": [
                "เพิ่ง",
                "กลับมา",
                "กินเสร็จ",
                "ถึง"
              ]
            },
            {
              "prompt": "คำไทย “เพิ่ง” ตรงกับคำจีนข้อใด?",
              "answer": "刚",
              "mode": "choice",
              "options": [
                "刚刚",
                "吃完",
                "刚",
                "到"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__到。",
              "answer": "刚/刚刚",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__回家。",
              "answer": "刚/刚刚",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 她__吃完饭。",
              "answer": "刚/刚刚",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__到。 (4)",
              "answer": "刚/刚刚",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__回家。 (5)",
              "answer": "刚/刚刚",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันเพิ่งมาถึง",
              "answer": "我刚到。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขาเพิ่งกลับบ้าน",
              "answer": "他刚刚回家。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันเพิ่งมาถึง (3)",
              "answer": "我刚到。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขาเพิ่งกลับบ้าน (4)",
              "answer": "他刚刚回家。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันเพิ่งมาถึง (5)",
              "answer": "我刚到。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันเพิ่งถึง",
              "answer": "我刚到。",
              "mode": "exact"
            },
            {
              "prompt": "เขาเพิ่งกินข้าวเสร็จ",
              "answer": "他刚刚吃完饭。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันเพิ่งถึง (3)",
              "answer": "我刚到。",
              "mode": "exact"
            },
            {
              "prompt": "เขาเพิ่งกินข้าวเสร็จ (4)",
              "answer": "他刚刚吃完饭。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันเพิ่งถึง (5)",
              "answer": "我刚到。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ gāng dào.",
              "answer": "我刚到。",
              "mode": "exact"
            },
            {
              "prompt": "Tā gānggāng chī wán fàn.",
              "answer": "他刚刚吃完饭。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ gāng dào. (3)",
              "answer": "我刚到。",
              "mode": "exact"
            },
            {
              "prompt": "Tā gānggāng chī wán fàn. (4)",
              "answer": "他刚刚吃完饭。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ gāng dào. (5)",
              "answer": "我刚到。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 刚",
              "answer": "刚",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 刚刚",
              "answer": "刚刚",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 到",
              "answer": "到",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 刚 (4)",
              "answer": "刚",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 刚刚 (5)",
              "answer": "刚刚",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 刚",
              "answer": "答案示例：我刚到。",
              "required": [
                "刚"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 刚刚",
              "answer": "答案示例：他刚刚吃完饭。",
              "required": [
                "刚刚"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 到",
              "answer": "答案示例：我刚到。",
              "required": [
                "到"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 吃完",
              "answer": "答案示例：他刚刚吃完饭。",
              "required": [
                "吃完"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 回来",
              "answer": "答案示例：我刚到。",
              "required": [
                "回来"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "刚/刚刚",
          "tokens": [
            "/",
            "刚",
            "刚",
            "刚"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我刚到。",
          "tokens": [
            "刚",
            "我",
            "到"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他刚刚回家。",
          "tokens": [
            "刚",
            "回",
            "他",
            "刚",
            "家"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขาเพิ่งกินข้าวเสร็จ",
          "answer": "他刚刚吃完饭。",
          "tokens": [
            "刚",
            "吃",
            "饭",
            "他",
            "刚",
            "完"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "刚/刚刚",
          "tokens": [
            "/",
            "刚",
            "刚",
            "刚"
          ]
        }
      ]
    },
    {
      "id": 35,
      "title": "就：马上、很早",
      "thaiTitle": "就: ทันทีหรือเร็วกว่าที่คิด",
      "formula": "主语 + 就 + 动词",
      "thai": "ก็...เลย / ตั้งแต่...",
      "thaiExplanation": "就 ใช้บอกว่าเกิดเร็ว ทันที หรือเร็วกว่าที่คาด เช่น จะมาเดี๋ยวนี้ หกโมงก็ตื่นแล้ว",
      "tip": "“就”可表示动作发生得早、快或顺着前文发生。",
      "examples": [
        {
          "zh": "我马上就来。",
          "pinyin": "Wǒ mǎshàng jiù lái.",
          "thai": "ฉันจะมาเดี๋ยวนี้",
          "tone": "Wo3 mashang4 jiu4 lai2."
        },
        {
          "zh": "他六点就起床了。",
          "pinyin": "Tā liù diǎn jiù qǐchuáng le.",
          "thai": "เขาตื่นตั้งแต่หกโมง",
          "tone": "Ta1 liu4 dian3 jiu4 qichuang2 le."
        }
      ],
      "words": [
        "就",
        "马上",
        "六点",
        "来",
        "起床"
      ],
      "vocab": [
        {
          "word": "就",
          "pinyin": "jiù",
          "tone": "jiu4",
          "thai": "ก็ / ทันที / แค่"
        },
        {
          "word": "马上",
          "pinyin": "mǎshàng",
          "tone": "mashang4",
          "thai": "ทันที"
        },
        {
          "word": "六点",
          "pinyin": "liù diǎn",
          "tone": "liu4 dian3",
          "thai": "หกโมง"
        },
        {
          "word": "来",
          "pinyin": "lái",
          "tone": "lai2",
          "thai": "มา"
        },
        {
          "word": "起床",
          "pinyin": "qǐchuáng",
          "tone": "qichuang2",
          "thai": "ตื่นนอน"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 就 (jiù) แปลว่าอะไร?",
              "answer": "ก็ / ทันที / แค่",
              "mode": "choice",
              "options": [
                "ทันที",
                "มา",
                "ก็ / ทันที / แค่",
                "หกโมง"
              ]
            },
            {
              "prompt": "คำว่า 马上 (mǎshàng) แปลว่าอะไร?",
              "answer": "ทันที",
              "mode": "choice",
              "options": [
                "ก็ / ทันที / แค่",
                "มา",
                "ทันที",
                "หกโมง"
              ]
            },
            {
              "prompt": "คำว่า 六点 (liù diǎn) แปลว่าอะไร?",
              "answer": "หกโมง",
              "mode": "choice",
              "options": [
                "ก็ / ทันที / แค่",
                "มา",
                "หกโมง",
                "ทันที"
              ]
            },
            {
              "prompt": "คำว่า 来 (lái) แปลว่าอะไร?",
              "answer": "มา",
              "mode": "choice",
              "options": [
                "ก็ / ทันที / แค่",
                "หกโมง",
                "มา",
                "ทันที"
              ]
            },
            {
              "prompt": "คำไทย “ก็ / ทันที / แค่” ตรงกับคำจีนข้อใด?",
              "answer": "就",
              "mode": "choice",
              "options": [
                "马上",
                "来",
                "就",
                "六点"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 我马上__来。",
              "answer": "就",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他六点__起床了。",
              "answer": "就",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我一回家__洗澡。",
              "answer": "就",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我马上__来。 (4)",
              "answer": "就",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他六点__起床了。 (5)",
              "answer": "就",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันจะมาเดี๋ยวนี้",
              "answer": "我马上就来。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขาตื่นตั้งแต่หกโมง",
              "answer": "他六点就起床了。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันจะมาเดี๋ยวนี้ (3)",
              "answer": "我马上就来。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขาตื่นตั้งแต่หกโมง (4)",
              "answer": "他六点就起床了。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันจะมาเดี๋ยวนี้ (5)",
              "answer": "我马上就来。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันจะมาเดี๋ยวนี้",
              "answer": "我马上就来。",
              "mode": "exact"
            },
            {
              "prompt": "เขาตื่นตั้งแต่หกโมง",
              "answer": "他六点就起床了。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันจะมาเดี๋ยวนี้ (3)",
              "answer": "我马上就来。",
              "mode": "exact"
            },
            {
              "prompt": "เขาตื่นตั้งแต่หกโมง (4)",
              "answer": "他六点就起床了。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันจะมาเดี๋ยวนี้ (5)",
              "answer": "我马上就来。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ mǎshàng jiù lái.",
              "answer": "我马上就来。",
              "mode": "exact"
            },
            {
              "prompt": "Tā liù diǎn jiù qǐchuáng le.",
              "answer": "他六点就起床了。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ mǎshàng jiù lái. (3)",
              "answer": "我马上就来。",
              "mode": "exact"
            },
            {
              "prompt": "Tā liù diǎn jiù qǐchuáng le. (4)",
              "answer": "他六点就起床了。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ mǎshàng jiù lái. (5)",
              "answer": "我马上就来。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 就",
              "answer": "就",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 马上",
              "answer": "马上",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 六点",
              "answer": "六点",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 就 (4)",
              "answer": "就",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 马上 (5)",
              "answer": "马上",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 就",
              "answer": "答案示例：我马上就来。",
              "required": [
                "就"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 马上",
              "answer": "答案示例：他六点就起床了。",
              "required": [
                "马上"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 六点",
              "answer": "答案示例：我马上就来。",
              "required": [
                "六点"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 来",
              "answer": "答案示例：他六点就起床了。",
              "required": [
                "来"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 起床",
              "answer": "答案示例：我马上就来。",
              "required": [
                "起床"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我马上就来。",
          "tokens": [
            "马",
            "就",
            "我",
            "上",
            "来"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他六点就起床了。",
          "tokens": [
            "六",
            "就",
            "床",
            "他",
            "点",
            "起",
            "了"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (3)",
          "answer": "我马上就来。",
          "tokens": [
            "马",
            "就",
            "我",
            "上",
            "来"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (4)",
          "answer": "他六点就起床了。",
          "tokens": [
            "六",
            "就",
            "床",
            "他",
            "点",
            "起",
            "了"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "我马上就来。",
          "tokens": [
            "马",
            "就",
            "我",
            "上",
            "来"
          ]
        }
      ]
    },
    {
      "id": 36,
      "title": "就：强调范围",
      "thaiTitle": "就: แค่ / เพียง",
      "formula": "就 + 数量 / 人 / 事",
      "thai": "แค่ / ก็เพียง",
      "thaiExplanation": "就 ใช้เน้นว่ามีแค่นั้นหรือจำกัดอยู่แค่นั้น เช่น มีแค่หนึ่งคำถาม",
      "tip": "“就”也可强调数量少、范围小或只限某项。",
      "examples": [
        {
          "zh": "我就一个问题。",
          "pinyin": "Wǒ jiù yí ge wèntí.",
          "thai": "ฉันมีแค่คำถามเดียว",
          "tone": "Wo3 jiu4 yi2 ge wenti2."
        },
        {
          "zh": "就他没来。",
          "pinyin": "Jiù tā méi lái.",
          "thai": "มีแค่เขาที่ไม่มา",
          "tone": "Jiu4 ta1 mei2 lai2."
        }
      ],
      "words": [
        "就",
        "一个",
        "问题",
        "他",
        "没来"
      ],
      "vocab": [
        {
          "word": "就",
          "pinyin": "jiù",
          "tone": "jiu4",
          "thai": "ก็ / ทันที / แค่"
        },
        {
          "word": "一个",
          "pinyin": "yí ge",
          "tone": "yi2 ge",
          "thai": "หนึ่งอัน / หนึ่งข้อ"
        },
        {
          "word": "问题",
          "pinyin": "wèntí",
          "tone": "wenti2",
          "thai": "คำถาม / ปัญหา"
        },
        {
          "word": "他",
          "pinyin": "tā",
          "tone": "ta1",
          "thai": "เขา"
        },
        {
          "word": "没来",
          "pinyin": "méi lái",
          "tone": "mei2 lai2",
          "thai": "ไม่ได้มา"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 就 (jiù) แปลว่าอะไร?",
              "answer": "ก็ / ทันที / แค่",
              "mode": "choice",
              "options": [
                "หนึ่งอัน / หนึ่งข้อ",
                "เขา",
                "ก็ / ทันที / แค่",
                "คำถาม / ปัญหา"
              ]
            },
            {
              "prompt": "คำว่า 一个 (yí ge) แปลว่าอะไร?",
              "answer": "หนึ่งอัน / หนึ่งข้อ",
              "mode": "choice",
              "options": [
                "ก็ / ทันที / แค่",
                "เขา",
                "หนึ่งอัน / หนึ่งข้อ",
                "คำถาม / ปัญหา"
              ]
            },
            {
              "prompt": "คำว่า 问题 (wèntí) แปลว่าอะไร?",
              "answer": "คำถาม / ปัญหา",
              "mode": "choice",
              "options": [
                "ก็ / ทันที / แค่",
                "เขา",
                "คำถาม / ปัญหา",
                "หนึ่งอัน / หนึ่งข้อ"
              ]
            },
            {
              "prompt": "คำว่า 他 (tā) แปลว่าอะไร?",
              "answer": "เขา",
              "mode": "choice",
              "options": [
                "ก็ / ทันที / แค่",
                "คำถาม / ปัญหา",
                "เขา",
                "หนึ่งอัน / หนึ่งข้อ"
              ]
            },
            {
              "prompt": "คำไทย “ก็ / ทันที / แค่” ตรงกับคำจีนข้อใด?",
              "answer": "就",
              "mode": "choice",
              "options": [
                "一个",
                "他",
                "就",
                "问题"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__一个问题。",
              "answer": "就",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: __他没来。",
              "answer": "就",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__喝一点儿。",
              "answer": "就",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__一个问题。 (4)",
              "answer": "就",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: __他没来。 (5)",
              "answer": "就",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยค",
          "prompts": [
            {
              "prompt": "แต่งประโยค: 就",
              "answer": "答案示例：我就买一个。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 就 (2)",
              "answer": "答案示例：我就买一个。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 就 (3)",
              "answer": "答案示例：我就买一个。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 就 (4)",
              "answer": "答案示例：我就买一个。",
              "mode": "exact"
            },
            {
              "prompt": "แต่งประโยค: 就 (5)",
              "answer": "答案示例：我就买一个。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันมีแค่คำถามเดียว",
              "answer": "我就一个问题。",
              "mode": "exact"
            },
            {
              "prompt": "มีแค่เขาที่ไม่มา",
              "answer": "就他没来。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันมีแค่คำถามเดียว (3)",
              "answer": "我就一个问题。",
              "mode": "exact"
            },
            {
              "prompt": "มีแค่เขาที่ไม่มา (4)",
              "answer": "就他没来。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันมีแค่คำถามเดียว (5)",
              "answer": "我就一个问题。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ jiù yí ge wèntí.",
              "answer": "我就一个问题。",
              "mode": "exact"
            },
            {
              "prompt": "Jiù tā méi lái.",
              "answer": "就他没来。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ jiù yí ge wèntí. (3)",
              "answer": "我就一个问题。",
              "mode": "exact"
            },
            {
              "prompt": "Jiù tā méi lái. (4)",
              "answer": "就他没来。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ jiù yí ge wèntí. (5)",
              "answer": "我就一个问题。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 就",
              "answer": "就",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 一个",
              "answer": "一个",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 问题",
              "answer": "问题",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 就 (4)",
              "answer": "就",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 一个 (5)",
              "answer": "一个",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 就",
              "answer": "答案示例：我就一个问题。",
              "required": [
                "就"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 一个",
              "answer": "答案示例：就他没来。",
              "required": [
                "一个"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 问题",
              "answer": "答案示例：我就一个问题。",
              "required": [
                "问题"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 他",
              "answer": "答案示例：就他没来。",
              "required": [
                "他"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 没来",
              "answer": "答案示例：我就一个问题。",
              "required": [
                "没来"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我就买一个。",
          "tokens": [
            "就",
            "一",
            "我",
            "买",
            "个"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันมีแค่คำถามเดียว",
          "answer": "我就一个问题。",
          "tokens": [
            "就",
            "个",
            "题",
            "我",
            "一",
            "问"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: มีแค่เขาที่ไม่มา",
          "answer": "就他没来。",
          "tokens": [
            "他",
            "来",
            "就",
            "没"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (4)",
          "answer": "我就买一个。",
          "tokens": [
            "就",
            "一",
            "我",
            "买",
            "个"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันมีแค่คำถามเดียว (5)",
          "answer": "我就一个问题。",
          "tokens": [
            "就",
            "个",
            "题",
            "我",
            "一",
            "问"
          ]
        }
      ]
    },
    {
      "id": 37,
      "title": "再：将来再次",
      "thaiTitle": "再: ทำอีกในอนาคต",
      "formula": "以后 / 明天 + 再 + 动词",
      "thai": "ค่อย...อีกในอนาคต",
      "thaiExplanation": "再 ใช้กับการทำอีกครั้งในอนาคต เช่น พรุ่งนี้ค่อยมาอีก ครั้งหน้าค่อยคุย",
      "tip": "“再”常表示未来再做一次。",
      "examples": [
        {
          "zh": "我明天再来。",
          "pinyin": "Wǒ míngtiān zài lái.",
          "thai": "พรุ่งนี้ฉันค่อยมาอีก",
          "tone": "Wo3 mingtian1 zai4 lai2."
        },
        {
          "zh": "我们下次再说。",
          "pinyin": "Wǒmen xià cì zài shuō.",
          "thai": "ครั้งหน้าค่อยคุยกัน",
          "tone": "Women3 xia4 ci4 zai4 shuo1."
        }
      ],
      "words": [
        "再",
        "明天",
        "下次",
        "来",
        "说"
      ],
      "vocab": [
        {
          "word": "再",
          "pinyin": "zài",
          "tone": "zai4",
          "thai": "อีกครั้งในอนาคต"
        },
        {
          "word": "明天",
          "pinyin": "míngtiān",
          "tone": "mingtian1",
          "thai": "พรุ่งนี้"
        },
        {
          "word": "下次",
          "pinyin": "xià cì",
          "tone": "xia4 ci4",
          "thai": "ครั้งหน้า"
        },
        {
          "word": "来",
          "pinyin": "lái",
          "tone": "lai2",
          "thai": "มา"
        },
        {
          "word": "说",
          "pinyin": "shuō",
          "tone": "shuo1",
          "thai": "พูด"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 再 (zài) แปลว่าอะไร?",
              "answer": "อีกครั้งในอนาคต",
              "mode": "choice",
              "options": [
                "พรุ่งนี้",
                "มา",
                "อีกครั้งในอนาคต",
                "ครั้งหน้า"
              ]
            },
            {
              "prompt": "คำว่า 明天 (míngtiān) แปลว่าอะไร?",
              "answer": "พรุ่งนี้",
              "mode": "choice",
              "options": [
                "อีกครั้งในอนาคต",
                "มา",
                "พรุ่งนี้",
                "ครั้งหน้า"
              ]
            },
            {
              "prompt": "คำว่า 下次 (xià cì) แปลว่าอะไร?",
              "answer": "ครั้งหน้า",
              "mode": "choice",
              "options": [
                "อีกครั้งในอนาคต",
                "มา",
                "ครั้งหน้า",
                "พรุ่งนี้"
              ]
            },
            {
              "prompt": "คำว่า 来 (lái) แปลว่าอะไร?",
              "answer": "มา",
              "mode": "choice",
              "options": [
                "อีกครั้งในอนาคต",
                "ครั้งหน้า",
                "มา",
                "พรุ่งนี้"
              ]
            },
            {
              "prompt": "คำไทย “อีกครั้งในอนาคต” ตรงกับคำจีนข้อใด?",
              "answer": "再",
              "mode": "choice",
              "options": [
                "明天",
                "来",
                "再",
                "下次"
              ]
            }
          ]
        },
        {
          "type": "เลือกคำตอบที่ถูกต้อง",
          "prompts": [
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 明天__来。",
              "answer": "再",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 下次__说。",
              "answer": "再",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 以后__看。",
              "answer": "再",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 明天__来。 (4)",
              "answer": "再",
              "mode": "exact"
            },
            {
              "prompt": "เลือกคำตอบที่ถูกต้อง: 下次__说。 (5)",
              "answer": "再",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: พรุ่งนี้ค่อยมาอีก",
              "answer": "明天再来。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ครั้งหน้าค่อยคุย",
              "answer": "下次再说。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: พรุ่งนี้ค่อยมาอีก (3)",
              "answer": "明天再来。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ครั้งหน้าค่อยคุย (4)",
              "answer": "下次再说。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: พรุ่งนี้ค่อยมาอีก (5)",
              "answer": "明天再来。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "พรุ่งนี้ฉันค่อยมาอีก",
              "answer": "我明天再来。",
              "mode": "exact"
            },
            {
              "prompt": "ครั้งหน้าค่อยคุยกัน",
              "answer": "我们下次再说。",
              "mode": "exact"
            },
            {
              "prompt": "พรุ่งนี้ฉันค่อยมาอีก (3)",
              "answer": "我明天再来。",
              "mode": "exact"
            },
            {
              "prompt": "ครั้งหน้าค่อยคุยกัน (4)",
              "answer": "我们下次再说。",
              "mode": "exact"
            },
            {
              "prompt": "พรุ่งนี้ฉันค่อยมาอีก (5)",
              "answer": "我明天再来。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ míngtiān zài lái.",
              "answer": "我明天再来。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒmen xià cì zài shuō.",
              "answer": "我们下次再说。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ míngtiān zài lái. (3)",
              "answer": "我明天再来。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒmen xià cì zài shuō. (4)",
              "answer": "我们下次再说。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ míngtiān zài lái. (5)",
              "answer": "我明天再来。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 再",
              "answer": "再",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 明天",
              "answer": "明天",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 下次",
              "answer": "下次",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 再 (4)",
              "answer": "再",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 明天 (5)",
              "answer": "明天",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 再",
              "answer": "答案示例：我明天再来。",
              "required": [
                "再"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 明天",
              "answer": "答案示例：我们下次再说。",
              "required": [
                "明天"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 下次",
              "answer": "答案示例：我明天再来。",
              "required": [
                "下次"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 来",
              "answer": "答案示例：我们下次再说。",
              "required": [
                "来"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 说",
              "answer": "答案示例：我明天再来。",
              "required": [
                "说"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "明天再来。",
          "tokens": [
            "天",
            "来",
            "明",
            "再"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "下次再说。",
          "tokens": [
            "次",
            "说",
            "下",
            "再"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: พรุ่งนี้ฉันค่อยมาอีก",
          "answer": "我明天再来。",
          "tokens": [
            "明",
            "再",
            "我",
            "天",
            "来"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ครั้งหน้าค่อยคุยกัน",
          "answer": "我们下次再说。",
          "tokens": [
            "们",
            "次",
            "说",
            "我",
            "下",
            "再"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "明天再来。",
          "tokens": [
            "天",
            "来",
            "明",
            "再"
          ]
        }
      ]
    },
    {
      "id": 38,
      "title": "又：过去再次",
      "thaiTitle": "又: เกิดซ้ำแล้ว",
      "formula": "又 + 动词 + 了",
      "thai": "อีกแล้ว",
      "thaiExplanation": "又 ใช้กับสิ่งที่เกิดซ้ำแล้ว หรือเกิดอีกแล้ว มักเจอคู่กับ 了",
      "tip": "“又”多表示已经发生的重复动作。",
      "examples": [
        {
          "zh": "他又迟到了。",
          "pinyin": "Tā yòu chídào le.",
          "thai": "เขาสายอีกแล้ว",
          "tone": "Ta1 you4 chidao4 le."
        },
        {
          "zh": "又下雨了。",
          "pinyin": "Yòu xiàyǔ le.",
          "thai": "ฝนตกอีกแล้ว",
          "tone": "You4 xiayu3 le."
        }
      ],
      "words": [
        "又",
        "迟到",
        "下雨",
        "来了",
        "忘了"
      ],
      "vocab": [
        {
          "word": "又",
          "pinyin": "yòu",
          "tone": "you4",
          "thai": "อีกแล้ว"
        },
        {
          "word": "迟到",
          "pinyin": "chídào",
          "tone": "chidao4",
          "thai": "มาสาย"
        },
        {
          "word": "下雨",
          "pinyin": "xià yǔ",
          "tone": "xia4 yu3",
          "thai": "ฝนตก"
        },
        {
          "word": "来了",
          "pinyin": "lái le",
          "tone": "lai2 le",
          "thai": "มาแล้ว"
        },
        {
          "word": "忘了",
          "pinyin": "wàng le",
          "tone": "wang4 le",
          "thai": "ลืมแล้ว"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 又 (yòu) แปลว่าอะไร?",
              "answer": "อีกแล้ว",
              "mode": "choice",
              "options": [
                "มาสาย",
                "มาแล้ว",
                "อีกแล้ว",
                "ฝนตก"
              ]
            },
            {
              "prompt": "คำว่า 迟到 (chídào) แปลว่าอะไร?",
              "answer": "มาสาย",
              "mode": "choice",
              "options": [
                "อีกแล้ว",
                "มาแล้ว",
                "มาสาย",
                "ฝนตก"
              ]
            },
            {
              "prompt": "คำว่า 下雨 (xià yǔ) แปลว่าอะไร?",
              "answer": "ฝนตก",
              "mode": "choice",
              "options": [
                "อีกแล้ว",
                "มาแล้ว",
                "ฝนตก",
                "มาสาย"
              ]
            },
            {
              "prompt": "คำว่า 来了 (lái le) แปลว่าอะไร?",
              "answer": "มาแล้ว",
              "mode": "choice",
              "options": [
                "อีกแล้ว",
                "ฝนตก",
                "มาแล้ว",
                "มาสาย"
              ]
            },
            {
              "prompt": "คำไทย “อีกแล้ว” ตรงกับคำจีนข้อใด?",
              "answer": "又",
              "mode": "choice",
              "options": [
                "迟到",
                "来了",
                "又",
                "下雨"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__迟到了。",
              "answer": "又",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: __下雨了。",
              "answer": "又",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__忘了。",
              "answer": "又",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__迟到了。 (4)",
              "answer": "又",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: __下雨了。 (5)",
              "answer": "又",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: เขามาอีกแล้ว",
              "answer": "他又来了。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฝนตกอีกแล้ว",
              "answer": "又下雨了。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขามาอีกแล้ว (3)",
              "answer": "他又来了。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฝนตกอีกแล้ว (4)",
              "answer": "又下雨了。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขามาอีกแล้ว (5)",
              "answer": "他又来了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "เขาสายอีกแล้ว",
              "answer": "他又迟到了。",
              "mode": "exact"
            },
            {
              "prompt": "ฝนตกอีกแล้ว",
              "answer": "又下雨了。",
              "mode": "exact"
            },
            {
              "prompt": "เขาสายอีกแล้ว (3)",
              "answer": "他又迟到了。",
              "mode": "exact"
            },
            {
              "prompt": "ฝนตกอีกแล้ว (4)",
              "answer": "又下雨了。",
              "mode": "exact"
            },
            {
              "prompt": "เขาสายอีกแล้ว (5)",
              "answer": "他又迟到了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Tā yòu chídào le.",
              "answer": "他又迟到了。",
              "mode": "exact"
            },
            {
              "prompt": "Yòu xiàyǔ le.",
              "answer": "又下雨了。",
              "mode": "exact"
            },
            {
              "prompt": "Tā yòu chídào le. (3)",
              "answer": "他又迟到了。",
              "mode": "exact"
            },
            {
              "prompt": "Yòu xiàyǔ le. (4)",
              "answer": "又下雨了。",
              "mode": "exact"
            },
            {
              "prompt": "Tā yòu chídào le. (5)",
              "answer": "他又迟到了。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 又",
              "answer": "又",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 迟到",
              "answer": "迟到",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 下雨",
              "answer": "下雨",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 又 (4)",
              "answer": "又",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 迟到 (5)",
              "answer": "迟到",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 又",
              "answer": "答案示例：他又迟到了。",
              "required": [
                "又"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 迟到",
              "answer": "答案示例：又下雨了。",
              "required": [
                "迟到"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 下雨",
              "answer": "答案示例：他又迟到了。",
              "required": [
                "下雨"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 来了",
              "answer": "答案示例：又下雨了。",
              "required": [
                "来了"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 忘了",
              "answer": "答案示例：他又迟到了。",
              "required": [
                "忘了"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他又来了。",
          "tokens": [
            "又",
            "了",
            "他",
            "来"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "又下雨了。",
          "tokens": [
            "下",
            "了",
            "又",
            "雨"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขาสายอีกแล้ว",
          "answer": "他又迟到了。",
          "tokens": [
            "又",
            "到",
            "他",
            "迟",
            "了"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (4)",
          "answer": "他又来了。",
          "tokens": [
            "又",
            "了",
            "他",
            "来"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "又下雨了。",
          "tokens": [
            "下",
            "了",
            "又",
            "雨"
          ]
        }
      ]
    },
    {
      "id": 39,
      "title": "还：还在 / 还有",
      "thaiTitle": "还: ยัง / ยังมี",
      "formula": "还 + 动词 / 还 + 有",
      "thai": "ยัง / ยังมี / อีกด้วย",
      "thaiExplanation": "还 แปลว่ายัง หรือยังมี ใช้บอกว่าสภาพหรือการกระทำยังดำเนินต่อ",
      "tip": "“还”表示持续、补充或仍然如此。",
      "examples": [
        {
          "zh": "他还在学习。",
          "pinyin": "Tā hái zài xuéxí.",
          "thai": "เขายังเรียนอยู่",
          "tone": "Ta1 hai2 zai4 xuexi2."
        },
        {
          "zh": "我还有一个问题。",
          "pinyin": "Wǒ hái yǒu yí ge wèntí.",
          "thai": "ฉันยังมีอีกหนึ่งคำถาม",
          "tone": "Wo3 hai2 you3 yi2 ge wenti2."
        }
      ],
      "words": [
        "还",
        "还在",
        "还有",
        "学习",
        "问题"
      ],
      "vocab": [
        {
          "word": "还",
          "pinyin": "hái",
          "tone": "hai2",
          "thai": "ยัง / ยังมี"
        },
        {
          "word": "还在",
          "pinyin": "hái zài",
          "tone": "hai2 zai4",
          "thai": "ยังอยู่ / ยังกำลัง"
        },
        {
          "word": "还有",
          "pinyin": "hái yǒu",
          "tone": "hai2 you3",
          "thai": "ยังมี"
        },
        {
          "word": "学习",
          "pinyin": "xuéxí",
          "tone": "xuexi2",
          "thai": "เรียน / ศึกษา"
        },
        {
          "word": "问题",
          "pinyin": "wèntí",
          "tone": "wenti2",
          "thai": "คำถาม / ปัญหา"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 还 (hái) แปลว่าอะไร?",
              "answer": "ยัง / ยังมี",
              "mode": "choice",
              "options": [
                "ยังอยู่ / ยังกำลัง",
                "เรียน / ศึกษา",
                "ยัง / ยังมี",
                "ยังมี"
              ]
            },
            {
              "prompt": "คำว่า 还在 (hái zài) แปลว่าอะไร?",
              "answer": "ยังอยู่ / ยังกำลัง",
              "mode": "choice",
              "options": [
                "ยัง / ยังมี",
                "เรียน / ศึกษา",
                "ยังอยู่ / ยังกำลัง",
                "ยังมี"
              ]
            },
            {
              "prompt": "คำว่า 还有 (hái yǒu) แปลว่าอะไร?",
              "answer": "ยังมี",
              "mode": "choice",
              "options": [
                "ยัง / ยังมี",
                "เรียน / ศึกษา",
                "ยังมี",
                "ยังอยู่ / ยังกำลัง"
              ]
            },
            {
              "prompt": "คำว่า 学习 (xuéxí) แปลว่าอะไร?",
              "answer": "เรียน / ศึกษา",
              "mode": "choice",
              "options": [
                "ยัง / ยังมี",
                "ยังมี",
                "เรียน / ศึกษา",
                "ยังอยู่ / ยังกำลัง"
              ]
            },
            {
              "prompt": "คำไทย “ยัง / ยังมี” ตรงกับคำจีนข้อใด?",
              "answer": "还",
              "mode": "choice",
              "options": [
                "还在",
                "学习",
                "还",
                "还有"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__在学习。",
              "answer": "还",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__有一个问题。",
              "answer": "还",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 你__要咖啡吗？",
              "answer": "还",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__在学习。 (4)",
              "answer": "还",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__有一个问题。 (5)",
              "answer": "还",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: เขายังทำงานอยู่",
              "answer": "他还在工作。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันยังมีเงิน",
              "answer": "我还有钱。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขายังทำงานอยู่ (3)",
              "answer": "他还在工作。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันยังมีเงิน (4)",
              "answer": "我还有钱。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: เขายังทำงานอยู่ (5)",
              "answer": "他还在工作。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "เขายังเรียนอยู่",
              "answer": "他还在学习。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันยังมีอีกหนึ่งคำถาม",
              "answer": "我还有一个问题。",
              "mode": "exact"
            },
            {
              "prompt": "เขายังเรียนอยู่ (3)",
              "answer": "他还在学习。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันยังมีอีกหนึ่งคำถาม (4)",
              "answer": "我还有一个问题。",
              "mode": "exact"
            },
            {
              "prompt": "เขายังเรียนอยู่ (5)",
              "answer": "他还在学习。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Tā hái zài xuéxí.",
              "answer": "他还在学习。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ hái yǒu yí ge wèntí.",
              "answer": "我还有一个问题。",
              "mode": "exact"
            },
            {
              "prompt": "Tā hái zài xuéxí. (3)",
              "answer": "他还在学习。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ hái yǒu yí ge wèntí. (4)",
              "answer": "我还有一个问题。",
              "mode": "exact"
            },
            {
              "prompt": "Tā hái zài xuéxí. (5)",
              "answer": "他还在学习。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 还",
              "answer": "还",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 还在",
              "answer": "还在",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 还有",
              "answer": "还有",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 还 (4)",
              "answer": "还",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 还在 (5)",
              "answer": "还在",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 还",
              "answer": "答案示例：他还在学习。",
              "required": [
                "还"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 还在",
              "answer": "答案示例：我还有一个问题。",
              "required": [
                "还在"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 还有",
              "answer": "答案示例：他还在学习。",
              "required": [
                "还有"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 学习",
              "answer": "答案示例：我还有一个问题。",
              "required": [
                "学习"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 问题",
              "answer": "答案示例：他还在学习。",
              "required": [
                "问题"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "他还在工作。",
          "tokens": [
            "还",
            "工",
            "他",
            "在",
            "作"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我还有钱。",
          "tokens": [
            "还",
            "钱",
            "我",
            "有"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: เขายังเรียนอยู่",
          "answer": "他还在学习。",
          "tokens": [
            "还",
            "学",
            "他",
            "在",
            "习"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันยังมีอีกหนึ่งคำถาม",
          "answer": "我还有一个问题。",
          "tokens": [
            "还",
            "一",
            "问",
            "我",
            "有",
            "个",
            "题"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "他还在工作。",
          "tokens": [
            "还",
            "工",
            "他",
            "在",
            "作"
          ]
        }
      ]
    },
    {
      "id": 40,
      "title": "才：才刚、才几点",
      "thaiTitle": "才: เพิ่ง / แค่",
      "formula": "才 + 动词 / 才 + 数量",
      "thai": "เพิ่ง / แค่",
      "thaiExplanation": "才 ใช้บอกว่าเพิ่งเกิดขึ้น ช้ากว่าที่คาด หรือมีจำนวนแค่น้อย",
      "tip": "“才”表示晚、少、刚刚达到。",
      "examples": [
        {
          "zh": "我才到。",
          "pinyin": "Wǒ cái dào.",
          "thai": "ฉันเพิ่งถึง",
          "tone": "Wo3 cai2 dao4."
        },
        {
          "zh": "现在才八点。",
          "pinyin": "Xiànzài cái bā diǎn.",
          "thai": "ตอนนี้เพิ่งแปดโมง",
          "tone": "Xianzai4 cai2 ba1 dian3."
        }
      ],
      "words": [
        "才",
        "到",
        "八点",
        "一个",
        "开始"
      ],
      "vocab": [
        {
          "word": "才",
          "pinyin": "cái",
          "tone": "cai2",
          "thai": "เพิ่ง / แค่"
        },
        {
          "word": "到",
          "pinyin": "dào",
          "tone": "dao4",
          "thai": "ถึง"
        },
        {
          "word": "八点",
          "pinyin": "bā diǎn",
          "tone": "ba1 dian3",
          "thai": "แปดโมง"
        },
        {
          "word": "一个",
          "pinyin": "yí ge",
          "tone": "yi2 ge",
          "thai": "หนึ่งอัน / หนึ่งข้อ"
        },
        {
          "word": "开始",
          "pinyin": "kāishǐ",
          "tone": "kaishi3",
          "thai": "เริ่ม"
        }
      ],
      "tasks": [
        {
          "type": "เลือกคำตอบ",
          "prompts": [
            {
              "prompt": "คำว่า 才 (cái) แปลว่าอะไร?",
              "answer": "เพิ่ง / แค่",
              "mode": "choice",
              "options": [
                "ถึง",
                "หนึ่งอัน / หนึ่งข้อ",
                "เพิ่ง / แค่",
                "แปดโมง"
              ]
            },
            {
              "prompt": "คำว่า 到 (dào) แปลว่าอะไร?",
              "answer": "ถึง",
              "mode": "choice",
              "options": [
                "เพิ่ง / แค่",
                "หนึ่งอัน / หนึ่งข้อ",
                "ถึง",
                "แปดโมง"
              ]
            },
            {
              "prompt": "คำว่า 八点 (bā diǎn) แปลว่าอะไร?",
              "answer": "แปดโมง",
              "mode": "choice",
              "options": [
                "เพิ่ง / แค่",
                "หนึ่งอัน / หนึ่งข้อ",
                "แปดโมง",
                "ถึง"
              ]
            },
            {
              "prompt": "คำว่า 一个 (yí ge) แปลว่าอะไร?",
              "answer": "หนึ่งอัน / หนึ่งข้อ",
              "mode": "choice",
              "options": [
                "เพิ่ง / แค่",
                "แปดโมง",
                "หนึ่งอัน / หนึ่งข้อ",
                "ถึง"
              ]
            },
            {
              "prompt": "คำไทย “เพิ่ง / แค่” ตรงกับคำจีนข้อใด?",
              "answer": "才",
              "mode": "choice",
              "options": [
                "到",
                "一个",
                "才",
                "八点"
              ]
            }
          ]
        },
        {
          "type": "เติมคำลงในช่องว่าง",
          "prompts": [
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__到。",
              "answer": "才",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 现在__八点。",
              "answer": "才",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 他__买一个。",
              "answer": "才",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 我__到。 (4)",
              "answer": "才",
              "mode": "exact"
            },
            {
              "prompt": "เติมคำลงในช่องว่าง: 现在__八点。 (5)",
              "answer": "才",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แปลเป็นภาษาจีน",
          "prompts": [
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันเพิ่งเริ่ม",
              "answer": "我才开始。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ตอนนี้เพิ่งสามโมง",
              "answer": "现在才三点。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันเพิ่งเริ่ม (3)",
              "answer": "我才开始。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ตอนนี้เพิ่งสามโมง (4)",
              "answer": "现在才三点。",
              "mode": "exact"
            },
            {
              "prompt": "แปลเป็นภาษาจีน: ฉันเพิ่งเริ่ม (5)",
              "answer": "我才开始。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านคำแปลไทยแล้วเขียนประโยคจีน",
          "prompts": [
            {
              "prompt": "ฉันเพิ่งถึง",
              "answer": "我才到。",
              "mode": "exact"
            },
            {
              "prompt": "ตอนนี้เพิ่งแปดโมง",
              "answer": "现在才八点。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันเพิ่งถึง (3)",
              "answer": "我才到。",
              "mode": "exact"
            },
            {
              "prompt": "ตอนนี้เพิ่งแปดโมง (4)",
              "answer": "现在才八点。",
              "mode": "exact"
            },
            {
              "prompt": "ฉันเพิ่งถึง (5)",
              "answer": "我才到。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "อ่านพินอินแล้วเขียนตัวจีน",
          "prompts": [
            {
              "prompt": "Wǒ cái dào.",
              "answer": "我才到。",
              "mode": "exact"
            },
            {
              "prompt": "Xiànzài cái bā diǎn.",
              "answer": "现在才八点。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ cái dào. (3)",
              "answer": "我才到。",
              "mode": "exact"
            },
            {
              "prompt": "Xiànzài cái bā diǎn. (4)",
              "answer": "现在才八点。",
              "mode": "exact"
            },
            {
              "prompt": "Wǒ cái dào. (5)",
              "answer": "我才到。",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "จำคำสำคัญ",
          "prompts": [
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 才",
              "answer": "才",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 到",
              "answer": "到",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 八点",
              "answer": "八点",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 才 (4)",
              "answer": "才",
              "mode": "exact"
            },
            {
              "prompt": "พิมพ์คำจีนที่เกี่ยวกับบทนี้: 到 (5)",
              "answer": "到",
              "mode": "exact"
            }
          ]
        },
        {
          "type": "แต่งประโยคเพิ่ม",
          "prompts": [
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 才",
              "answer": "答案示例：我才到。",
              "required": [
                "才"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 到",
              "answer": "答案示例：现在才八点。",
              "required": [
                "到"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 八点",
              "answer": "答案示例：我才到。",
              "required": [
                "八点"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 一个",
              "answer": "答案示例：现在才八点。",
              "required": [
                "一个"
              ],
              "mode": "sentence"
            },
            {
              "prompt": "แต่งประโยคจีนโดยใช้คำ/โครงสร้างนี้: 开始",
              "answer": "答案示例：我才到。",
              "required": [
                "开始"
              ],
              "mode": "sentence"
            }
          ]
        }
      ],
      "dragTasks": [
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "我才开始。",
          "tokens": [
            "才",
            "始",
            "我",
            "开"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง",
          "answer": "现在才三点。",
          "tokens": [
            "在",
            "三",
            "现",
            "才",
            "点"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ฉันเพิ่งถึง",
          "answer": "我才到。",
          "tokens": [
            "才",
            "我",
            "到"
          ]
        },
        {
          "prompt": "เรียงตัวอักษรจีนให้ตรงกับความหมาย: ตอนนี้เพิ่งแปดโมง",
          "answer": "现在才八点。",
          "tokens": [
            "在",
            "八",
            "现",
            "才",
            "点"
          ]
        },
        {
          "prompt": "ลากคำ/ตัวจีนให้เป็นประโยคที่ถูกต้อง (5)",
          "answer": "我才开始。",
          "tokens": [
            "才",
            "始",
            "我",
            "开"
          ]
        }
      ]
    }
  ],
  "copyItems": [
    {
      "sentence": "我吃苹果。",
      "pinyin": "Wǒ chī píngguǒ.",
      "tone": "Wo3 chi1 pingguo3.",
      "note": "SVO 基础语序"
    },
    {
      "sentence": "绿色的熊。",
      "pinyin": "Lǜsè de xióng.",
      "tone": "Lvse4 de xiong2.",
      "note": "形容词 + 的 + 名词"
    },
    {
      "sentence": "我明天在家吃饭。",
      "pinyin": "Wǒ míngtiān zài jiā chī fàn.",
      "tone": "Wo3 mingtian1 zai4 jia1 chi1 fan4.",
      "note": "时间地点在动词前"
    },
    {
      "sentence": "他认真地写作业。",
      "pinyin": "Tā rènzhēn de xiě zuòyè.",
      "tone": "Ta1 renzhen1 de xie3 zuoye4.",
      "note": "地 + 动词"
    },
    {
      "sentence": "他说得很好。",
      "pinyin": "Tā shuō de hěn hǎo.",
      "tone": "Ta1 shuo1 de hen3 hao3.",
      "note": "得 + 补语"
    },
    {
      "sentence": "我有手机。",
      "pinyin": "Wǒ yǒu shǒujī.",
      "tone": "Wo3 you3 shouji1.",
      "note": "有"
    },
    {
      "sentence": "他没有钱。",
      "pinyin": "Tā méiyǒu qián.",
      "tone": "Ta1 meiyou3 qian2.",
      "note": "没有"
    },
    {
      "sentence": "我在家。",
      "pinyin": "Wǒ zài jiā.",
      "tone": "Wo3 zai4 jia1.",
      "note": "在 + 地点"
    },
    {
      "sentence": "门开着。",
      "pinyin": "Mén kāi zhe.",
      "tone": "Men2 kai1 zhe.",
      "note": "着"
    },
    {
      "sentence": "我的钥匙呢？",
      "pinyin": "Wǒ de yàoshi ne?",
      "tone": "Wo3 de yaoshi4 ne?",
      "note": "呢"
    },
    {
      "sentence": "我会说中文。",
      "pinyin": "Wǒ huì shuō Zhōngwén.",
      "tone": "Wo3 hui4 shuo1 Zhongwen2.",
      "note": "会"
    },
    {
      "sentence": "可以坐这儿吗？",
      "pinyin": "Kěyǐ zuò zhèr ma?",
      "tone": "Keyi3 zuo4 zher4 ma?",
      "note": "可以"
    },
    {
      "sentence": "我要喝水。",
      "pinyin": "Wǒ yào hē shuǐ.",
      "tone": "Wo3 yao4 he1 shui3.",
      "note": "要"
    },
    {
      "sentence": "我想学中文。",
      "pinyin": "Wǒ xiǎng xué Zhōngwén.",
      "tone": "Wo3 xiang3 xue2 Zhongwen2.",
      "note": "想"
    },
    {
      "sentence": "我吃饭了。",
      "pinyin": "Wǒ chī fàn le.",
      "tone": "Wo3 chi1 fan4 le.",
      "note": "了"
    },
    {
      "sentence": "我去过中国。",
      "pinyin": "Wǒ qù guo Zhōngguó.",
      "tone": "Wo3 qu4 guo Zhongguo2.",
      "note": "过"
    },
    {
      "sentence": "如果下雨，我就不去。",
      "pinyin": "Rúguǒ xiàyǔ, wǒ jiù bù qù.",
      "tone": "Ruguo3 xiayu3, wo3 jiu4 bu4 qu4.",
      "note": "如果……就……"
    },
    {
      "sentence": "我没吃早饭。",
      "pinyin": "Wǒ méi chī zǎofàn.",
      "tone": "Wo3 mei2 chi1 zaofan4.",
      "note": "没"
    },
    {
      "sentence": "请把门关上。",
      "pinyin": "Qǐng bǎ mén guān shàng.",
      "tone": "Qing3 ba3 men2 guan1 shang4.",
      "note": "把"
    },
    {
      "sentence": "手机被摔坏了。",
      "pinyin": "Shǒujī bèi shuāi huài le.",
      "tone": "Shouji1 bei4 shuai1 huai4 le.",
      "note": "被"
    },
    {
      "sentence": "我明天再来。",
      "pinyin": "Wǒ míngtiān zài lái.",
      "tone": "Wo3 mingtian1 zai4 lai2.",
      "note": "再"
    },
    {
      "sentence": "他又迟到了。",
      "pinyin": "Tā yòu chídào le.",
      "tone": "Ta1 you4 chidao4 le.",
      "note": "又"
    },
    {
      "sentence": "我才到。",
      "pinyin": "Wǒ cái dào.",
      "tone": "Wo3 cai2 dao4.",
      "note": "才"
    },
    {
      "sentence": "我给你打电话。",
      "pinyin": "Wǒ gěi nǐ dǎ diànhuà.",
      "tone": "Wo3 gei3 ni3 da3 dianhua4.",
      "note": "给"
    },
    {
      "sentence": "我比他高。",
      "pinyin": "Wǒ bǐ tā gāo.",
      "tone": "Wo3 bi3 ta1 gao1.",
      "note": "比"
    },
    {
      "sentence": "虽然很累，但是我还要学。",
      "pinyin": "Suīrán hěn lèi, dànshì wǒ hái yào xué.",
      "tone": "Suiran2 hen3 lei4, danshi4 wo3 hai2 yao4 xue2.",
      "note": "虽然……但是……"
    },
    {
      "sentence": "他一边听歌，一边写作业。",
      "pinyin": "Tā yìbiān tīng gē, yìbiān xiě zuòyè.",
      "tone": "Ta1 yibian1 ting1 ge1, yibian1 xie3 zuoye4.",
      "note": "一边……一边……"
    },
    {
      "sentence": "除了中文以外，我还学泰语。",
      "pinyin": "Chúle Zhōngwén yǐwài, wǒ hái xué Tàiyǔ.",
      "tone": "Chule2 Zhongwen2 yiwai4, wo3 hai2 xue2 Taiyu3.",
      "note": "除了……以外"
    },
    {
      "sentence": "中文越学越有意思。",
      "pinyin": "Zhōngwén yuè xué yuè yǒu yìsi.",
      "tone": "Zhongwen2 yue4 xue2 yue4 you3 yisi4.",
      "note": "越……越……"
    },
    {
      "sentence": "这个是我的。",
      "pinyin": "Zhège shì wǒ de.",
      "tone": "Zhege4 shi4 wo3 de.",
      "note": "的：省略名词"
    },
    {
      "sentence": "老师的手机。",
      "pinyin": "Lǎoshī de shǒujī.",
      "tone": "Laoshi1 de shouji1.",
      "note": "的：所属关系"
    },
    {
      "sentence": "你写得很好。",
      "pinyin": "Nǐ xiě de hěn hǎo.",
      "tone": "Ni3 xie3 de hen3 hao3.",
      "note": "得：程度补语"
    },
    {
      "sentence": "她高兴地笑了。",
      "pinyin": "Tā gāoxìng de xiào le.",
      "tone": "Ta1 gaoxing4 de xiao4 le.",
      "note": "地：方式状语"
    },
    {
      "sentence": "我去学校。",
      "pinyin": "Wǒ qù xuéxiào.",
      "tone": "Wo3 qu4 xuexiao4.",
      "note": "去 / 来"
    },
    {
      "sentence": "我觉得中文很有意思。",
      "pinyin": "Wǒ juéde Zhōngwén hěn yǒu yìsi.",
      "tone": "Wo3 juede2 Zhongwen2 hen3 you3 yisi4.",
      "note": "觉得"
    },
    {
      "sentence": "我喜欢音乐。",
      "pinyin": "Wǒ xǐhuān yīnyuè.",
      "tone": "Wo3 xihuan1 yinyue4.",
      "note": "喜欢"
    },
    {
      "sentence": "我今天不能去。",
      "pinyin": "Wǒ jīntiān bù néng qù.",
      "tone": "Wo3 jintian1 bu4 neng2 qu4.",
      "note": "能"
    },
    {
      "sentence": "我刚到。",
      "pinyin": "Wǒ gāng dào.",
      "tone": "Wo3 gang1 dao4.",
      "note": "刚 / 刚刚"
    },
    {
      "sentence": "我马上就来。",
      "pinyin": "Wǒ mǎshàng jiù lái.",
      "tone": "Wo3 mashang4 jiu4 lai2.",
      "note": "就：马上"
    },
    {
      "sentence": "他还在学习。",
      "pinyin": "Tā hái zài xuéxí.",
      "tone": "Ta1 hai2 zai4 xuexi2.",
      "note": "还"
    }
  ]
};
